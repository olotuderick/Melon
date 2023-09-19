import 'package:flutter/material.dart';
import 'package:monosonic/components/next_or_skip.dart';
import 'package:monosonic/components/selectable_container.dart';
import 'package:monosonic/features/on_boarding/artist_select.dart';
import 'package:monosonic/utils.dart';

class CategoriesScreen extends StatefulWidget {
  static const String routeName = '/categories-select';
  const CategoriesScreen({super.key});

  @override
  State<CategoriesScreen> createState() => _CategoriesScreenState();
}

class _CategoriesScreenState extends State<CategoriesScreen> {
  List<int> selected = [];
  List<Map<String, dynamic>> categories = [
    {
      "title": "Country",
      "image": "assets/images/categories/country.png",
    },
    {
      "title": "Pop",
      "image": "assets/images/categories/pop.png",
    },
    {
      "title": "Hip Hop",
      "image": "assets/images/categories/hiphop.png",
    },
    {
      "title": "Rock",
      "image": "assets/images/categories/rock.png",
    },
    {
      "title": "R&B",
      "image": "assets/images/categories/rnb.png",
    },
    {
      "title": "Indie",
      "image": "assets/images/categories/indie.png",
    },
    {
      "title": "Metal",
      "image": "assets/images/categories/metalic.png",
    },
    {
      "title": "Chill Out",
      "image": "assets/images/categories/chill-out.png",
    },
    {
      "title": "Hard Rock",
      "image": "assets/images/categories/hard-rock.png",
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
                "Categories",
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: isDarkMode(context) ? Colors.white : Colors.black,
                  fontSize: 28,
                  fontWeight: FontWeight.w600,
                ),
              ),
              const SizedBox(height: 10),
              SizedBox(
                width: size.width * 0.6,
                child: Text(
                  "Select three or more genres to match your interests",
                  textAlign: TextAlign.center,
                  softWrap: true,
                  style: TextStyle(
                    color: isDarkMode(context)
                        ? Colors.white.withOpacity(0.7)
                        : Colors.black.withOpacity(0.7),
                    fontSize: 14,
                    fontWeight: FontWeight.w400,
                  ),
                ),
              ),
              const SizedBox(height: 40),
              // Grid of 2 columns
              SizedBox(
                width: size.width * 0.8,
                child: GridView.count(
                  crossAxisCount: 3,
                  shrinkWrap: true,
                  // crossAxisSpacing: 33,
                  mainAxisSpacing: 25,
                  physics: const NeverScrollableScrollPhysics(),
                  children: [
                    for (var social in categories)
                      GestureDetector(
                        onTap: (() => setSelected(categories.indexOf(social))),
                        child: ImageSelectable(
                          image: social["image"],
                          title: social["title"],
                          index: categories.indexOf(social),
                          selected:
                              selected.contains(categories.indexOf(social)),
                        ),
                      ),
                  ],
                ),
              ),
              const SizedBox(height: 45),
              NextOrSkip(
                  title: "Skip",
                  onPressed: () {
                    Navigator.pushReplacementNamed(
                        context, ArtistSelectScreen.routeName);
                  })
            ],
          ),
        ),
      ),
    );
  }
}
