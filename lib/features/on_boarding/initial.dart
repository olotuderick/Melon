import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:monosonic/components/next_or_skip.dart';
import 'package:monosonic/features/on_boarding/account_select.dart';

class InitialScreen extends StatelessWidget {
  static const String routeName = '/';
  const InitialScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    return Scaffold(
        body: SizedBox(
      width: double.infinity,
      height: double.infinity,
      child: Stack(
        // fit: StackFit.expand,
        children: [
          SizedBox(
            height: size.height * 0.7,
            child: Image.asset(
              'assets/images/onboard-1.png',
              fit: BoxFit.cover,
              width: double.infinity,
            ),
          ),
          Positioned(
            // top: size.height * 0.5,
            bottom: 0,
            child: Container(
              width: size.width,
              // height: size.height * 0.5,
              decoration: BoxDecoration(
                color: const Color(0xFF1D1D1D),
                gradient: LinearGradient(
                  begin: Alignment.bottomCenter,
                  end: Alignment.topCenter,
                  stops: const [0.66, 1],
                  colors: [
                    const Color.fromARGB(255, 33, 33, 41),
                    const Color.fromARGB(255, 33, 33, 41).withOpacity(0.0),
                  ],
                ),
              ),
              child: Column(
                children: [
                  SvgPicture.asset(
                    'assets/logo.svg',
                    width: 100,
                    height: 100,
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  SizedBox(
                    width: 200,
                    height: 50,
                    child: SvgPicture.asset(
                      'assets/logo-text.svg',
                    ),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  Text(
                    'Feel free to enjoy your music',
                    style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                        color: Colors.white.withOpacity(0.8)),
                  ),
                  const SizedBox(
                    height: 60,
                  ),
                  NextOrSkip(
                    title: 'Start',
                    onPressed: () {
                      Navigator.pushReplacementNamed(
                        context,
                        AccountSelectScreen.routeName,
                      );
                    },
                  ),
                  SizedBox(
                    height: size.height * 0.13,
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    ));
  }
}
