# Use the OpenJDK image to build and run the Spring Boot app
# FROM openjdk:21
FROM apache/spark

USER root

# Install curl if it's not already in the base image
RUN apt-get update && apt-get install -y curl

# Set the working directory
WORKDIR /app

# Copy in all files
COPY . .

# Download PostgreSQL JDBC Driver
RUN curl -o /opt/spark/jars/postgresql-42.7.4.jar https://jdbc.postgresql.org/download/postgresql-42.7.4.jar
# RUN curl -o /opt/spark/jars/postgresql-42.2.18.jar https://jdbc.postgresql.org/download/postgresql-42.2.18.jar

RUN chmod 644 /opt/spark/jars/postgresql-42.7.4.jar

# ADD https://jdbc.postgresql.org/download/postgresql-42.2.18.jar /opt/spark/jars/

# Expose the port the app runs on
EXPOSE 8080

# Run the jar file
# ENTRYPOINT ["java", "-jar", "target/myapp-0.0.1-SNAPSHOT.jar"]

# Keeps the container running for now
CMD ["tail", "-f", "/dev/null"]
# CMD ["/bin/bash", "-c", "/opt/spark/bin/spark-class org.apache.spark.deploy.master.Master & /opt/spark/bin/spark-class org.apache.spark.deploy.worker.Worker spark://localhost:7077"]

