// ignore_for_file: no_leading_underscores_for_local_identifiers

import 'package:flutter/material.dart';
import 'package:monosonic/features/authentication/sign_in.dart';
import 'package:monosonic/features/authentication/sign_up.dart';
import 'package:monosonic/components/other_account.dart';
import 'package:monosonic/utils.dart';

class AccountSelectScreen extends StatelessWidget {
  static const String routeName = '/account-select';
  const AccountSelectScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    void _signIn() {
      Navigator.pushNamed(context, SignInScreen.routeName);
    }

    return Scaffold(
      body: SizedBox(
        width: double.infinity,
        height: double.infinity,
        child: Stack(children: [
          if (isDarkMode(context))
            SizedBox(
              height: size.height * 0.67,
              child: Image.asset(
                'assets/images/onboard-2.png',
                fit: BoxFit.cover,
                width: double.infinity,
              ),
            ),
          Positioned(
            bottom: 0,
            child: Container(
              width: size.width,
              decoration: BoxDecoration(
                color: isDarkMode(context) ? const Color(0xFF1D1D1D) : null,
                gradient: isDarkMode(context)
                    ? LinearGradient(
                        begin: Alignment.bottomCenter,
                        end: Alignment.topCenter,
                        stops: const [0.7, 1],
                        colors: [
                          const Color.fromARGB(255, 33, 33, 41),
                          const Color.fromARGB(255, 33, 33, 41)
                              .withOpacity(0.0),
                        ],
                      )
                    : null,
              ),
              child: Column(
                children: [
                  SizedBox(
                    width: size.width * 0.6,
                    child: Text(
                      "connect with other musicians",
                      softWrap: true,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 28,
                        fontWeight: FontWeight.w600,
                        color:
                            isDarkMode(context) ? Colors.white : Colors.black,
                      ),
                    ),
                  ),
                  if (!isDarkMode(context))
                    const SizedBox(
                      height: 20,
                    ),
                  if (!isDarkMode(context))
                    CdComponent(
                      size: size,
                      image: 'assets/images/onboard-2.png',
                    ),
                  const SizedBox(
                    height: 20,
                  ),
                  ElevatedButton.icon(
                    onPressed: () {
                      Navigator.of(context).pushNamed(SignUpScreen.routeName);
                    },
                    icon: const Icon(Icons.mail_outline_sharp),
                    label: const Text('Continue with email'),
                    style: ElevatedButton.styleFrom(
                      fixedSize: Size(size.width * 0.7, 56),
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
                  ),
                  const SizedBox(
                    height: 40,
                  ),
                  const OtherAccounts(),
                  const SizedBox(
                    height: 50,
                  ),
                  DefaultTextStyle(
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.w700,
                      color: isDarkMode(context)
                          ? Colors.white.withOpacity(0.7)
                          : Colors.black,
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Text(
                          'Already have an account? ',
                        ),
                        GestureDetector(
                          onTap: _signIn,
                          child: Text(
                            'Sign in',
                            style: TextStyle(
                              color: isDarkMode(context)
                                  ? Colors.white
                                  : const Color.fromARGB(255, 65, 48, 255),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(
                    height: size.height * 0.1,
                  ),
                ],
              ),
            ),
          ),
        ]),
      ),
    );
  }
}

class CdComponent extends StatelessWidget {
  const CdComponent({
    Key? key,
    required this.size,
    required this.image,
    this.color,
  }) : super(key: key);

  final Size size;
  final String image;
  final Color? color;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          height: size.width * 0.5,
          width: size.width * 0.5,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            // shadow of circle to make it look like a it's floating
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.2),
                blurRadius: 20,
                offset: const Offset(0, 20),
              ),
            ],

            image: DecorationImage(
              image: AssetImage(image),
              fit: BoxFit.cover,
              alignment: Alignment.topCenter,
            ),
          ),
          alignment: Alignment.center,
          child: Container(
            width: size.width * 0.15,
            height: size.width * 0.15,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: color ?? const Color.fromARGB(255, 225, 189, 91),
            ),
          ),
        )
      ],
    );
  }
}
