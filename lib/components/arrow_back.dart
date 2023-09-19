import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:monosonic/utils.dart';

class ArrowBack extends StatelessWidget {
  const ArrowBack({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        if (Navigator.canPop(context)) {
          Navigator.pop(context);
        }
      },
      child: UnconstrainedBox(
        child: Container(
          margin: const EdgeInsets.only(
              // left: 20,
              ),
          height: 40,
          width: 40,
          clipBehavior: Clip.hardEdge,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(15),
            color: isDarkMode(context) ? null : Colors.white,
            border: Border.all(
              color: Colors.white,
              width: 1.4,
            ),
          ),
          child: Icon(
            Icons.arrow_back_outlined,
            color: isDarkMode(context) ? Colors.white : Colors.black,
          ),
        ),
      ),
    );
  }
}

class ActionButton extends StatelessWidget {
  final String icon;
  final Function() onPressed;
  final int? width;
  const ActionButton({
    Key? key,
    this.width,
    required this.icon,
    required this.onPressed,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPressed,
      child: UnconstrainedBox(
        child: Container(
          /* margin: const EdgeInsets.only(
            left: 20,
          ), */
          height: 40,
          width: 40,
          clipBehavior: Clip.hardEdge,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(15),
            color: isDarkMode(context) ? null : Colors.white,
            border: Border.all(
              color: Colors.white,
              width: 1.4,
            ),
          ),
          child: UnconstrainedBox(
            child: SizedBox(
              // width: 40,
              child: SvgPicture.asset(
                icon,
                color: isDarkMode(context) ? Colors.white : Colors.black,
                width: width == 8 ? 8 : null,
              ),
            ),
          ),
        ),
      ),
    );
  }
}
