import 'package:flutter/material.dart';
import 'package:monosonic/features/authentication/sign_up.dart';
import 'package:monosonic/features/authentication/verify_code.dart';
import 'package:monosonic/components/arrow_back.dart';
import 'package:monosonic/utils.dart';

class ForgotPasswordScreen extends StatefulWidget {
  static const String routeName = '/forgot-password';
  const ForgotPasswordScreen({super.key});

  @override
  State<ForgotPasswordScreen> createState() => _ForgotPasswordScreenState();
}

class _ForgotPasswordScreenState extends State<ForgotPasswordScreen> {
  void _sendEmail() {
    Navigator.popAndPushNamed(context, VerifyCodeScreen.routeName);
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
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
            // mainAxisAlignment: MainAxisAlignment.,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: MediaQuery.of(context).size.height * 0.1,
              ),
              Text(
                'Forgot Password',
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
                'Enter the email address associated with your account',
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
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () {
                    showDialog(
                        context: context,
                        barrierColor: Colors.black.withOpacity(0.5),
                        builder: (context) => AlertDialog(
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(14),
                              ),
                              backgroundColor: isDarkMode(context)
                                  ? const Color.fromARGB(255, 33, 33, 41)
                                  : Colors.white,
                              actionsAlignment: MainAxisAlignment.center,
                              content: SizedBox(
                                height: 196,
                                child: Column(
                                  children: [
                                    Container(
                                      height: 64,
                                      width: 64,
                                      decoration: BoxDecoration(
                                        color: isDarkMode(context)
                                            ? Colors.white
                                            : const Color.fromARGB(
                                                255, 239, 243, 245),
                                        borderRadius: BorderRadius.circular(24),
                                      ),
                                      child: const Icon(
                                        Icons.mail_outlined,
                                        color: Color.fromARGB(255, 65, 48, 255),
                                        size: 30,
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 32,
                                    ),
                                    Text(
                                      'Check your mailbox',
                                      style: TextStyle(
                                        color: isDarkMode(context)
                                            ? Colors.white
                                            : Colors.black,
                                        fontSize: 24,
                                        fontWeight: FontWeight.w600,
                                      ),
                                    ),
                                    const SizedBox(
                                      height: 16,
                                    ),
                                    Text(
                                      'We sent the instructions to recover your account',
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                        color: isDarkMode(context)
                                            ? Colors.white.withOpacity(0.7)
                                            : Colors.black.withOpacity(0.7),
                                        fontSize: 16,
                                        fontWeight: FontWeight.w400,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                              actions: [
                                Container(
                                  margin: const EdgeInsets.only(bottom: 20),
                                  width: size.width * 0.7,
                                  height: 56,
                                  child: ElevatedButton(
                                    onPressed: _sendEmail,
                                    style: ElevatedButton.styleFrom(
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
                                    child: const Text('Check Email'),
                                  ),
                                ),
                              ],
                            ));
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
                  child: const Text('Send'),
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
