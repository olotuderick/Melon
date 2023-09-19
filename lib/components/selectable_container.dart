import 'package:badges/badges.dart' as badges;
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:monosonic/utils.dart';

class Social extends StatelessWidget {
  final String title;
  final String icon;
  final int index;

  final bool selected;
  const Social({
    Key? key,
    required this.title,
    required this.icon,
    required this.index,
    required this.selected,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        badges.Badge(
          showBadge: selected,
          badgeContent: const Icon(
            Icons.check_rounded,
            size: 16,
            color: Colors.white,
          ),
          badgeStyle: const badges.BadgeStyle(
            badgeColor: Color.fromARGB(255, 111, 44, 255),
            shape: badges.BadgeShape.circle,
            elevation: 0,
          ),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
            height: 80,
            width: 80,
            decoration: BoxDecoration(
              color: selected
                  ? Colors.black
                  : isDarkMode(context)
                      ? const Color.fromARGB(255, 33, 33, 41)
                      : const Color.fromARGB(154, 255, 255, 255),
              border: Border.all(
                  color: selected
                      ? const Color.fromARGB(255, 111, 44, 255)
                      : isDarkMode(context)
                          ? Colors.white
                          : Colors.black,
                  width: 2),
              borderRadius: BorderRadius.circular(24),
            ),
            child: SvgPicture.asset(
              icon,
              color: selected
                  ? Colors.white
                  : isDarkMode(context)
                      ? Colors.white
                      : Colors.black,
            ),
          ),
        ),
        const SizedBox(height: 10),
        Text(
          title,
          textAlign: TextAlign.center,
          style: TextStyle(
            color: isDarkMode(context) ? Colors.white : Colors.black,
            fontSize: 14,
            fontWeight: FontWeight.w600,
            letterSpacing: 1,
          ),
        ),
      ],
    );
  }
}

class ImageSelectable extends StatelessWidget {
  final String title;
  final String image;
  final int index;

  final bool selected;
  const ImageSelectable({
    Key? key,
    required this.title,
    required this.image,
    required this.index,
    required this.selected,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 140,
      child: Column(
        children: [
          badges.Badge(
            showBadge: selected,
            badgeContent: const Icon(
              Icons.check_rounded,
              size: 16,
              color: Colors.white,
            ),
            badgeStyle: const badges.BadgeStyle(
              badgeColor: Color.fromARGB(255, 111, 44, 255),
              shape: badges.BadgeShape.circle,
              elevation: 0,
            ),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 3, vertical: 3),
              height: 80,
              width: 80,
              decoration: BoxDecoration(
                border: selected
                    ? Border.all(
                        color: const Color.fromARGB(255, 111, 44, 255),
                        width: 2)
                    : null,
                borderRadius: BorderRadius.circular(24),
              ),
              child: Container(
                  clipBehavior: Clip.hardEdge,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(24),
                  ),
                  child: image.startsWith("http")
                      ? Image.network(
                          image,
                          fit: BoxFit.cover,
                          alignment: Alignment.topCenter,
                        )
                      : Image.asset(
                          image,
                          fit: BoxFit.cover,
                          alignment: Alignment.topCenter,
                        )),
            ),
          ),
          const SizedBox(height: 0),
          Text(
            title,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: isDarkMode(context) ? Colors.white : Colors.black,
              fontSize: 14,
              fontWeight: FontWeight.w600,
              letterSpacing: 1,
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
        ],
      ),
    );
  }
}
