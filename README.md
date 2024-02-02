# Weather Application

## Overview

This is a simple weather application built with NodeJS (backend) and React (frontend). It allows users to input a city name and displays the current weather information for that city, utilizing data from a public weather API.

## Features

- Fetches and displays current weather data including temperature, humidity, and weather conditions.
- Backend endpoint `GET /weather/:city` for fetching weather data for a specific city.
- Frontend interface for user input and displaying weather information.

## Prerequisites

Before running this project, ensure you have NodeJS and npm installed on your system.

## Installation & Setup

1. **Clone the repository**
git clone <repository-url>
cd <repository-directory>

2. **Environment Setup**

Create a `.env` file in the backend directory and add your weather API key.

4. **Running the Application**

Use the provided `run.sh` script to start both the backend and frontend services.

The frontend should now be accessible at `http://localhost:3000`, and the backend will be running on `http://localhost:3000/weather`.

## Usage

1. **Accessing the Application**

Open a web browser and go to `http://localhost:3000`.

2. **Using the Application**

- Enter a city name in the input field.
- Click the 'Get Weather' button or press 'Enter'.
- View the current weather information for the specified city.

## Contributing

Feel free to fork this repository and submit pull requests. For major changes or questions, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
