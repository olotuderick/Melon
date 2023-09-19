import 'package:flutter/material.dart';
import 'package:monosonic/components/arrow_back.dart';
import 'package:monosonic/features/on_boarding/social_media_profile.dart';
import 'package:monosonic/utils.dart';

class SignUpScreen extends StatefulWidget {
  static const String routeName = '/sign-up';
  const SignUpScreen({super.key});

  @override
  State<SignUpScreen> createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      // resizeToAvoidBottomInset: false,
      appBar: AppBar(
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.only(
            bottomLeft: Radius.circular(10),
            bottomRight: Radius.circular(10),
          ),
        ),
        flexibleSpace: isDarkMode(context)
            ? null
            : Container(
                decoration: const BoxDecoration(
                  borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(20),
                    bottomRight: Radius.circular(20),
                  ),
                  image: DecorationImage(
                    image: AssetImage('assets/images/onboard-2.png'),
                    fit: BoxFit.cover,
                    alignment: Alignment.topCenter,
                  ),
                ),
              ),
        elevation: 0,
        leadingWidth: 70,
        toolbarHeight: isDarkMode(context) ? 80 : 110,
        leading: const ArrowBack(),
      ),
      body: SingleChildScrollView(
        keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
        child: Container(
          padding: EdgeInsets.only(
            left: 16,
            right: 16,
            top: isDarkMode(context) ? size.height * 0.10 : size.height * 0.06,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Sign Up',
                style: TextStyle(
                    color: isDarkMode(context) ? Colors.white : Colors.black,
                    fontSize: 28,
                    fontWeight: FontWeight.w600,
                    // letterSpacing
                    letterSpacing: 1),
              ),
              const SizedBox(
                height: 10,
              ),
              Text(
                'Fill the form below to continue',
                style: TextStyle(
                  color: isDarkMode(context)
                      ? Colors.white.withOpacity(0.7)
                      : Colors.black.withOpacity(0.7),
                  fontSize: 15,
                  fontWeight: FontWeight.w400,
                ),
              ),
              const SizedBox(
                height: 40,
              ),
              // outlined text field
              TextField(
                style: TextStyle(
                  color: isDarkMode(context) ? Colors.white : Colors.black,
                  fontSize: 16,
                  fontWeight: FontWeight.w400,
                ),
                decoration: inputDecoration(context),
              ),
              const SizedBox(
                height: 20,
              ),
              TextField(
                style: TextStyle(
                  color: isDarkMode(context) ? Colors.white : Colors.black,
                  fontSize: 16,
                  fontWeight: FontWeight.w400,
                ),
                keyboardType: TextInputType.emailAddress,
                decoration: inputDecoration(context).copyWith(
                  labelText: 'Email',
                  hintText: 'Enter your email address',
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              TextField(
                style: TextStyle(
                  color: isDarkMode(context) ? Colors.white : Colors.black,
                  fontSize: 16,
                  fontWeight: FontWeight.w400,
                ),
                obscureText: true,
                decoration: inputDecoration(context).copyWith(
                  labelText: 'Password',
                  hintText: 'Enter your password',
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () {
                    Navigator.pushNamed(
                        context, SocialMediProfileScreen.routeName);
                  },
                  style: ElevatedButton.styleFrom(
                    fixedSize: const Size(double.infinity, 56),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                    padding: const EdgeInsets.symmetric(
                      horizontal: 20,
                      vertical: 15,
                    ),
                    textStyle: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  child: const Text('Sign Up'),
                ),
              ),
              const SizedBox(
                height: 80,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

InputDecoration inputDecoration(BuildContext context) {
  return InputDecoration(
    hintText: 'Enter your full name',
    labelText: 'Full Name',
    labelStyle: TextStyle(
      color: isDarkMode(context) ? Colors.white : Colors.black,
      fontSize: 16,
      fontWeight: FontWeight.w400,
    ),
    hintStyle: TextStyle(
      color: isDarkMode(context)
          ? Colors.white.withOpacity(0.3)
          : Colors.black.withOpacity(0.3),
      fontSize: 16,
      fontWeight: FontWeight.w400,
    ),
    contentPadding: const EdgeInsets.symmetric(
      horizontal: 20,
      vertical: 22,
    ),
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(14),
    ),
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(
          color: isDarkMode(context) ? Colors.white : Colors.black, width: 1),
      borderRadius: BorderRadius.circular(14),
    ),
    focusedBorder: OutlineInputBorder(
      borderSide: BorderSide(
          color: isDarkMode(context) ? Colors.white : Colors.black, width: 2),
      borderRadius: BorderRadius.circular(14),
    ),
    // Padding
  );
}
