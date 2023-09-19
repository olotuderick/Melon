import 'package:flutter/material.dart';
import 'package:monosonic/features/authentication/forgot_password.dart';
import 'package:monosonic/features/authentication/sign_up.dart';
import 'package:monosonic/components/arrow_back.dart';
import 'package:monosonic/components/other_account.dart';
import 'package:monosonic/features/home/home.dart';
import 'package:monosonic/utils.dart';

class SignInScreen extends StatefulWidget {
  static const String routeName = '/sign-in';
  const SignInScreen({super.key});

  @override
  State<SignInScreen> createState() => _SignInScreenState();
}

class _SignInScreenState extends State<SignInScreen> {
  bool _remember = true;
  void _onRememberChanged(bool newValue) => setState(() {
        _remember = newValue;
      });
  void _forgotPassword() {
    Navigator.pushNamed(context, ForgotPasswordScreen.routeName);
  }

  void _signIn() {
    Navigator.pushNamed(context, HomeScreen.routeName);
  }

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
                'Sign In',
                style: TextStyle(
                  color: isDarkMode(context) ? Colors.white : Colors.black,
                  fontSize: 28,
                  fontWeight: FontWeight.w600,
                  letterSpacing: 1,
                ),
              ),
              const SizedBox(
                height: 10,
              ),
              Text(
                'Fill the form below to sign in to your account',
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
              Row(
                children: [
                  // check box
                  Switch.adaptive(
                    value: _remember,
                    onChanged: _onRememberChanged,
                    activeColor: const Color.fromARGB(255, 111, 44, 255),
                  ),
                  const Spacer(),
                  GestureDetector(
                    onTap: _forgotPassword,
                    child: Text(
                      'Forgot Password?',
                      style: TextStyle(
                        color:
                            isDarkMode(context) ? Colors.white : Colors.black,
                        fontSize: 16,
                        fontWeight: FontWeight.w400,
                        decoration: TextDecoration.underline,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 20,
              ),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: _signIn,
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
                  child: const Text('Sign In'),
                ),
              ),
              const SizedBox(
                height: 40,
              ),
              const SizedBox(
                width: double.infinity,
                child: OtherAccounts(),
              )
            ],
          ),
        ),
      ),
    );
  }
}
