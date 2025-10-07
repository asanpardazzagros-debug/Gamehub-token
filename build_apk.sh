#!/bin/bash

echo " "
echo "🔨 ================================="
echo "🎮 GAMEHUB TOKEN - APK BUILDER"
echo "🔨 ================================="
echo " "

# Build the project
echo "🏗️  Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Sync with Android
echo "🔄 Syncing with Android..."
npx cap sync android

if [ $? -ne 0 ]; then
    echo "❌ Sync failed!"
    exit 1
fi

echo " "
echo "✅ Build completed successfully!"
echo " "
echo "📱 To build APK manually:"
echo "   cd android && ./gradlew assembleDebug"
echo " "
echo "📦 APK location:"
echo "   android/app/build/outputs/apk/debug/app-debug.apk"
echo " "
echo "🎮 GameHub Token APK Ready!"
echo " "
