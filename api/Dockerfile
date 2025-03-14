# Use the official Python image from the Docker Hub, version 3.9-slim
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the requirements.txt file
COPY requirements.txt ./

# Install the Python dependencies specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the source code from the host to the container's /app/src directory
COPY src/ ./src/

# Expose port 8080 to allow access to the application
EXPOSE 8080

# Start the application
CMD ["python", "src/main.py"]