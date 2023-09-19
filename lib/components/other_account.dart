import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:monosonic/utils.dart';

class OtherAccounts extends StatelessWidget {
  const OtherAccounts({super.key});

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    List<SvgPicture> socialIcons = [
      SvgPicture.asset(
        !isDarkMode(context)
            ? 'assets/icons/facebook-dark.svg'
            : 'assets/icons/facebook.svg',
        width: 18,
        height: 18,
      ),
      SvgPicture.asset(
        !isDarkMode(context)
            ? "assets/icons/instagram-dark.svg"
            : 'assets/icons/instagram.svg',
        width: 18,
        height: 18,
      ),
      SvgPicture.asset(
        !isDarkMode(context)
            ? 'assets/icons/google-dark.svg'
            : 'assets/icons/google.svg',
        width: 18,
        height: 18,
      ),
    ];
    return Column(
      children: [
        Text(
          'OR SIGN IN WITH',
          style: TextStyle(
            fontSize: 14,
            fontWeight: FontWeight.w700,
            color: !isDarkMode(context)
                ? const Color.fromARGB(255, 33, 33, 41).withOpacity(0.7)
                : Colors.white.withOpacity(0.7),
          ),
        ),
        const SizedBox(
          height: 50,
        ),
        SizedBox(
          width: size.width * 0.6,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              for (var icon in socialIcons)
                Container(
                  width: 50,
                  height: 50,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(
                      color: !isDarkMode(context)
                          ? const Color.fromARGB(255, 33, 33, 41)
                          : Colors.white,
                    ),
                  ),
                  child: icon,
                ),
            ],
          ),
        ),
        const SizedBox(
          height: 20,
        )
      ],
    );
  }
}
