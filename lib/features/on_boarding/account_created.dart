import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:monosonic/features/authentication/sign_in.dart';
import 'package:monosonic/utils.dart';

class AccountCreatedScreen extends StatelessWidget {
  static const String routeName = '/account-created';
  const AccountCreatedScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    /* List<SvgPicture> socialIcons = [
      SvgPicture.asset(
        'assets/icons/facebook.svg',
        width: 18,
        height: 18,
      ),
      SvgPicture.asset(
        'assets/icons/instagram.svg',
        width: 18,
        height: 18,
      ),
      SvgPicture.asset(
        'assets/icons/google.svg',
        width: 18,
        height: 18,
      ),
    ]; */
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
                        stops: const [0.5, 1],
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
                  if (isDarkMode(context))
                    ClipRRect(
                      borderRadius: BorderRadius.circular(24),
                      child: Container(
                        width: 100,
                        height: 100,
                        decoration: const BoxDecoration(
                          color: Color.fromRGBO(49, 49, 49, 0.2),
                        ),
                        child: BackdropFilter(
                          filter: ImageFilter.blur(
                              sigmaX: 12.5,
                              sigmaY: 12.5), // Apply the blur effect
                          child: Container(
                              alignment: Alignment.center,
                              child: SvgPicture.asset("assets/icons/user.svg")),
                        ),
                      ),
                    ),
                  if (!isDarkMode(context))
                    ClipRRect(
                      borderRadius: const BorderRadius.only(
                        topLeft: Radius.circular(35),
                        topRight: Radius.circular(10),
                        bottomRight: Radius.circular(35),
                        bottomLeft: Radius.circular(10),
                      ),
                      child: Container(
                        width: 105,
                        height: 105,
                        decoration: const BoxDecoration(
                          color: Color.fromRGBO(49, 49, 49, 0.2),
                        ),
                        child: Image.asset(
                          "assets/images/onboard-2.png",
                          fit: BoxFit.cover,
                          alignment: Alignment.topCenter,
                        ),
                      ),
                    ),
                  const SizedBox(
                    height: 32,
                  ),
                  Text(
                    "Account Created",
                    softWrap: true,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 28,
                      fontWeight: FontWeight.w600,
                      color: isDarkMode(context) ? Colors.white : Colors.black,
                    ),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  SizedBox(
                    width: size.width * 0.8,
                    child: Text(
                      "Connect and start collabs with other artists that match your insterests",
                      softWrap: true,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w400,
                        color: isDarkMode(context)
                            ? Colors.white.withOpacity(0.7)
                            : Colors.black.withOpacity(0.7),
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  ElevatedButton.icon(
                    onPressed: () {
                      Navigator.of(context).pushNamed(SignInScreen.routeName);
                    },
                    icon: const Icon(Icons.check_circle_outline_outlined),
                    label: const Text('Let\'s begin'),
                    style: ElevatedButton.styleFrom(
                      fixedSize: Size(size.width * 0.6, 56),
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
                  SizedBox(
                    height: size.height * 0.35,
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
