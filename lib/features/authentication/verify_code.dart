import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:monosonic/features/authentication/new_password.dart';
import 'package:monosonic/components/arrow_back.dart';
import 'package:monosonic/utils.dart';

class VerifyCodeScreen extends StatefulWidget {
  static const String routeName = '/verify-code';
  const VerifyCodeScreen({super.key});

  @override
  State<VerifyCodeScreen> createState() => _VerifyCodeScreenState();
}

class _VerifyCodeScreenState extends State<VerifyCodeScreen> {
  void _nextField(
    String value,
  ) {
    if (value.length == 1) {
      FocusScope.of(context).nextFocus();
    }
  }

  void _newPassword() {
    Navigator.pushNamed(context, NewPasswordScreen.routeName);
  }

  @override
  Widget build(BuildContext context) {
    InputDecoration inputDecoration(BuildContext context) {
      return InputDecoration(
        contentPadding: const EdgeInsets.symmetric(
          vertical: 18,
          horizontal: 2,
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(14),
          borderSide: BorderSide(
            color: isDarkMode(context) ? Colors.white : Colors.black,
            width: 1,
          ),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(14),
          borderSide: const BorderSide(
            color: Color.fromARGB(255, 111, 44, 255),
            width: 1,
          ),
        ),
      );
    }

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
            top: isDarkMode(context) ? size.height * 0.06 : size.height * 0.06,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: MediaQuery.of(context).size.height * 0.1,
              ),
              Text(
                'Verify Code',
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
                'Enter the code we sent to your email',
                softWrap: true,
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
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  SizedBox(
                    width: 56,
                    height: 56,
                    child: TextField(
                      cursorColor: const Color.fromARGB(255, 111, 44, 255),
                      onChanged: (value) => _nextField(
                        value,
                      ),
                      style: TextStyle(
                        color:
                            isDarkMode(context) ? Colors.white : Colors.black,
                        fontSize: 18,
                        fontWeight: FontWeight.w600,
                      ),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.center,
                      inputFormatters: [
                        LengthLimitingTextInputFormatter(1),
                        FilteringTextInputFormatter.digitsOnly,
                      ],
                      decoration: inputDecoration(context),
                    ),
                  ),
                  SizedBox(
                    width: 56,
                    height: 56,
                    child: TextField(
                      cursorColor: const Color.fromARGB(255, 111, 44, 255),
                      onChanged: (value) => _nextField(
                        value,
                      ),
                      style: TextStyle(
                        color:
                            isDarkMode(context) ? Colors.white : Colors.black,
                        fontSize: 18,
                        fontWeight: FontWeight.w600,
                      ),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.center,
                      inputFormatters: [
                        LengthLimitingTextInputFormatter(1),
                        FilteringTextInputFormatter.digitsOnly,
                      ],
                      decoration: inputDecoration(context),
                    ),
                  ),
                  SizedBox(
                    width: 56,
                    height: 56,
                    child: TextField(
                      cursorColor: const Color.fromARGB(255, 111, 44, 255),
                      onChanged: (value) => _nextField(
                        value,
                      ),
                      style: TextStyle(
                        color:
                            isDarkMode(context) ? Colors.white : Colors.black,
                        fontSize: 18,
                        fontWeight: FontWeight.w600,
                      ),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.center,
                      inputFormatters: [
                        LengthLimitingTextInputFormatter(1),
                        FilteringTextInputFormatter.digitsOnly,
                      ],
                      decoration: inputDecoration(context),
                    ),
                  ),
                  SizedBox(
                    width: 56,
                    height: 56,
                    child: TextField(
                      cursorColor: const Color.fromARGB(255, 111, 44, 255),
                      onChanged: (value) => _nextField(
                        value,
                      ),
                      style: TextStyle(
                        color:
                            isDarkMode(context) ? Colors.white : Colors.black,
                        fontSize: 18,
                        fontWeight: FontWeight.w600,
                      ),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.center,
                      inputFormatters: [
                        LengthLimitingTextInputFormatter(1),
                        FilteringTextInputFormatter.digitsOnly,
                      ],
                      decoration: inputDecoration(context),
                    ),
                  ),
                ],
              ),
              const SizedBox(
                height: 32,
              ),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: _newPassword,
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
                  child: const Text('Verify'),
                ),
              ),
              const SizedBox(
                height: 32,
              ),
              DefaultTextStyle(
                style: TextStyle(
                  color: isDarkMode(context) ? Colors.white : Colors.black,
                  fontSize: 15,
                  fontWeight: FontWeight.w400,
                ),
                child: const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Didn\'t receive the code? ',
                    ),
                    Text(
                      'Resend now',
                      style: TextStyle(
                        fontWeight: FontWeight.w600,
                        decoration: TextDecoration.underline,
                      ),
                    ),
                  ],
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
