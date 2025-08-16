# BrandPeek: Brand Discovery App (Nurdd Internship Assignment)

BrandPeek is a sleek and modern React Native application built with Expo as part of the internship assignment for Nurdd. The app provides a clean and intuitive brand discovery experience, allowing users to browse top brands and view their detailed information. The design is heavily inspired by the minimalist and professional aesthetic of nurdd.club, featuring a vibrant, dark-themed UI and a dynamic radial gradient background.

🎥 **Project Demo**


https://github.com/user-attachments/assets/8908233b-9342-4b6f-a3fc-d1925b03cbd0




🚀 **Features**

- **Modern UI/UX**: A clean, dark-themed interface with a vibrant blue radial gradient, inspired by nurdd.club.
- **Dynamic Data**: Fetches a list of top brands from a live backend API with asynchronous data handling.
- **Brand Details**: Users can tap on any brand to navigate to a detailed view with more information.
- **Professional Structure**: Built with a modular and scalable folder structure for easy maintenance and future development.
- **Safe Area Handling**: The UI is designed to be fully responsive and avoids overlapping with device notches and status bars using react-native-safe-area-context.
- **Custom Components**: Features custom-built SVG icons and a reusable header component.

🛠 **Tech Stack**

- **Framework**: React Native with Expo SDK
- **Navigation**: React Navigation (Stack Navigator)
- **Styling**: StyleSheet, expo-linear-gradient, react-native-svg for the custom radial gradient.
- **Backend**: MockAPI.io for the RESTful API.
- **Linting**: ESLint for code quality.

📁 **Project Structure**

The project follows a modular and organized folder structure to separate concerns and improve scalability.

```
BrandPeek/
├── assets/
├── components/
│   ├── BrandListItem.js
│   ├── Header.js
│   └── RadialGradientBackground.js
├── constants/
│   └── colors.js
├── navigation/
│   └── AppNavigator.js
├── screens/
│   ├── HomeScreen.js
│   └── BrandDetailScreen.js
├── services/
│   └── api.js
├── App.js
└── README.md
```

- **/components**: Contains reusable UI components used across different screens.
- **/constants**: Stores static values like the app's color palette.
- **/navigation**: Manages the app's navigation logic and stack.
- **/screens**: Holds the main screen components of the application.
- **/services**: Centralizes all API communication and data fetching logic.

⚙️ **Setup and Installation**

To run this project locally, please follow these steps:

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/vedantdalavi14/nurdd-internship-assignment.git
    cd nurdd-internship-assignment
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the application**:

    ```bash
    npx expo start
    ```

    This will open the Metro Bundler. You can then scan the QR code with the Expo Go app on your Android or iOS device.

📦 **How to Build an APK**

To build a standalone Android APK, follow these steps:

1.  **Install EAS CLI** (if you haven't already):
    ```bash
    npm install -g eas-cli
    ```

2.  **Log in** to your Expo account:
    ```bash
    eas login
    ```

3.  **Configure the build** in your project directory:
    ```bash
    eas build:configure
    ```

4.  **Start the build**:
    ```bash
    npx eas build -p android --profile preview
    ```

Once the build is complete, you will get a link to download and install the APK on your Android device.

🌐 **Backend API**

The application is powered by a mock backend created using MockAPI.io. This service was used to simulate a real-world RESTful API for fetching brand data.

-   **API Endpoint**: `https://68a0993f6e38a02c58179d3a.mockapi.io`
-   **Resources**:
    -   `GET /brands` - Fetches a list of all brands.
    -   `GET /brands/:id` - Fetches details for a specific brand by its ID.
