---
title: Analyst
platform: DockerLabs
os: Linux
difficulty: Fácil
date: "2025"
target: 172.17.0.2
summary: 
tools: []
techniques: []
tags: []
attackPath:
  - Nmap
  - enum4linux + Dirb
  - Credenciales en /dragon
  - SMB como jon
  - SSH como jon
  - Python hijacking → aria
  - sudo → daenerys
  - Reverse shell → root
---

## Reconocimiento

Antes de buscar cualquier vulnerabilidad, es importante realizar un reconocimiento de la máquina objetivo. Para esto, primero verificamos que la máquina esté encendida y qué servicios tiene corriendo, simplemente haciendo un ping:

```bash
    ping -c 3 172.17.0.2
```
Donde se obtiene como resultado que la máquina responde los pings, y se observa que el ttl es de 64, lo que indica que es una máquina Linux.

![image](/writeups/analyst/ping.png)

## Escaneo de puertos

Luego de verificar que la máquina se encuentra encendida, se procede a realizar un escaneo de puertos para identificar los servicios que están corriendo en la máquina. Para esto, se utiliza la herramienta Nmap:

```bash
    nmap -p- --open -sS --min-rate=5000 172.17.0.2 -vvv -oG openPorts 

```
Y luego con el recurso de ExtractPorts de S4vitar, podemos copiar solo los puertos abiertos encontrados con el comando anterior, para luego realizar un escaneo más profundo:


```bash
    nmap -p22,80 -sSCV -Pn -vvv  172.17.0.2 -oN Targeted
```

![image](/public/writeups/analyst/nmapResults.png)

De esta forma como se puede observar, se encuentran los puertos 22 y 80 abiertos, lo que indica que hay un servicio SSH y un servicio web corriendo en la máquina objetivo.

