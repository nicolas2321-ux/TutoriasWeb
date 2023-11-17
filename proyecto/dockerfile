# Utiliza una imagen oficial de MongoDB desde Docker Hub
FROM mongo:latest

# Configura el puerto en el que MongoDB estará escuchando
EXPOSE 27017

# Directorio de datos para almacenar los datos de MongoDB
VOLUME /data/db

# Comando para iniciar MongoDB
CMD ["mongod"]

# Copiar el script de inicialización al contenedor
COPY init-db.js /docker-entrypoint-initdb.d/

# Cambiar los permisos del script
RUN chmod +x /docker-entrypoint-initdb.d/init-db.js
