import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:monosonic/features/artist/artist_details.dart';
import 'package:monosonic/features/authentication/forgot_password.dart';
import 'package:monosonic/features/authentication/new_password.dart';
import 'package:monosonic/features/authentication/sign_in.dart';
import 'package:monosonic/features/authentication/sign_up.dart';
import 'package:monosonic/features/authentication/verify_code.dart';
import 'package:monosonic/features/home/home.dart';
import 'package:monosonic/features/on_boarding/account_created.dart';
import 'package:monosonic/features/on_boarding/account_select.dart';
import 'package:monosonic/features/on_boarding/artist_select.dart';
import 'package:monosonic/features/on_boarding/categories.dart';
import 'package:monosonic/features/on_boarding/initial.dart';
import 'package:monosonic/features/on_boarding/social_media_profile.dart';
import 'package:monosonic/features/player/full_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.system,
      theme: ThemeData(
        brightness: Brightness.light,
        scaffoldBackgroundColor: Colors.white,
        textTheme:
            GoogleFonts.poppinsTextTheme(Theme.of(context).textTheme).apply(
          displayColor: Colors.white,
        ),
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.white,
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            // foregroundColor: const Color.fromARGB(255, 111, 44, 255),
            backgroundColor: const Color.fromARGB(255, 65, 48, 255),
            textStyle: const TextStyle(
              color: Colors.white,
            ),
            elevation: 0,
          ),
        ),
      ),
      darkTheme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color.fromARGB(255, 33, 33, 41),
        appBarTheme: const AppBarTheme(
          backgroundColor: Color.fromARGB(255, 33, 33, 41),
        ),
        textTheme:
            GoogleFonts.poppinsTextTheme(Theme.of(context).textTheme).apply(
          displayColor: Colors.white,
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            // foregroundColor: const Color.fromARGB(255, 111, 44, 255),
            backgroundColor: const Color.fromARGB(255, 111, 44, 255),
            textStyle: const TextStyle(
              color: Colors.white,
            ),
            elevation: 0,
          ),
        ),
      ),
      initialRoute: HomeScreen.routeName,
      routes: {
        InitialScreen.routeName: (context) => const InitialScreen(),
        AccountSelectScreen.routeName: (context) => const AccountSelectScreen(),
        SignUpScreen.routeName: (context) => const SignUpScreen(),
        SignInScreen.routeName: (context) => const SignInScreen(),
        SocialMediProfileScreen.routeName: (context) =>
            const SocialMediProfileScreen(),
        CategoriesScreen.routeName: (context) => const CategoriesScreen(),
        ArtistSelectScreen.routeName: (context) => const ArtistSelectScreen(),
        AccountCreatedScreen.routeName: (context) =>
            const AccountCreatedScreen(),
        ForgotPasswordScreen.routeName: (context) =>
            const ForgotPasswordScreen(),
        VerifyCodeScreen.routeName: (context) => const VerifyCodeScreen(),
        NewPasswordScreen.routeName: (context) => const NewPasswordScreen(),
        HomeScreen.routeName: (context) => const HomeScreen(),
        ArtistDetailsScreen.routeName: (context) => const ArtistDetailsScreen(),
        FullScreenPlayer.routeName: (context) => const FullScreenPlayer(),
      },
    );
  }
}
