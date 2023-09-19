import 'package:flutter/material.dart';
import 'package:monosonic/components/next_or_skip.dart';
import 'package:monosonic/components/selectable_container.dart';
import 'package:monosonic/features/on_boarding/categories.dart';
import 'package:monosonic/utils.dart';

class SocialMediProfileScreen extends StatefulWidget {
  static const String routeName = '/social-media-profile';
  const SocialMediProfileScreen({super.key});

  @override
  State<SocialMediProfileScreen> createState() =>
      _SocialMediProfileScreenState();
}

class _SocialMediProfileScreenState extends State<SocialMediProfileScreen> {
  List<int> selected = [];
  List<Map<String, dynamic>> socialMedia = [
    {
      "title": "Spotify",
      "icon": "assets/icons/spotify.svg",
    },
    {
      "title": "Youtube",
      "icon": "assets/icons/youtube.svg",
    },
    {
      "title": "Apple Music",
      "icon": "assets/icons/apple.svg",
    },
    {
      "title": "Sound Cloud",
      "icon": "assets/icons/sound-cloud.svg",
    }
  ];
  void setSelected(int index) {
    if (selected.contains(index)) {
      selected.remove(index);
    } else {
      selected.add(index);
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    return Scaffold(
      // backgroundColor: const Color.fromARGB(255, 33, 33, 41),
      body: SafeArea(
        child: Container(
          alignment: Alignment.center,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "Social Media",
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: isDarkMode(context) ? Colors.white : Colors.black,
                  fontSize: 28,
                  fontWeight: FontWeight.w600,
                ),
              ),
              const SizedBox(height: 10),
              Text(
                "Select one or more music social media profile",
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: isDarkMode(context)
                      ? Colors.white.withOpacity(0.7)
                      : Colors.black.withOpacity(0.7),
                  fontSize: 14,
                  fontWeight: FontWeight.w400,
                ),
              ),
              const SizedBox(height: 110),
              SizedBox(
                width: size.width * 0.6,
                child: GridView.count(
                  crossAxisCount: 2,
                  shrinkWrap: true,
                  // crossAxisSpacing: 33,
                  mainAxisSpacing: 20,
                  physics: const NeverScrollableScrollPhysics(),
                  children: [
                    for (var social in socialMedia)
                      GestureDetector(
                        onTap: (() => setSelected(socialMedia.indexOf(social))),
                        child: Social(
                          icon: social["icon"],
                          title: social["title"],
                          index: socialMedia.indexOf(social),
                          selected:
                              selected.contains(socialMedia.indexOf(social)),
                        ),
                      ),
                  ],
                ),
              ),
              const SizedBox(height: 100),
              NextOrSkip(
                  title: "Skip",
                  onPressed: () {
                    Navigator.pushReplacementNamed(
                      context,
                      CategoriesScreen.routeName,
                    );
                  })
            ],
          ),
        ),
      ),
    );
  }
}
