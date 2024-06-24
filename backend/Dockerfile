# Use the OpenJDK image to build and run the Spring Boot app
FROM openjdk:21

# Set the working directory
WORKDIR /app

# Copy in all viles
COPY . .

# Package the application
# RUN ./mvnw package

# Expose the port the app runs on
EXPOSE 8080

# Run the jar file
# ENTRYPOINT ["java", "-jar", "target/myapp-0.0.1-SNAPSHOT.jar"]

# Keeps the container running for now
CMD ["tail", "-f", "/dev/null"]