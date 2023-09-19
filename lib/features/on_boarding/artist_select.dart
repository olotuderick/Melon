import 'package:flutter/material.dart';
import 'package:monosonic/components/next_or_skip.dart';
import 'package:monosonic/components/selectable_container.dart';
import 'package:monosonic/features/on_boarding/account_created.dart';
import 'package:monosonic/utils.dart';

class ArtistSelectScreen extends StatefulWidget {
  static const String routeName = '/artist-select';
  const ArtistSelectScreen({super.key});

  @override
  State<ArtistSelectScreen> createState() => _ArtistSelectScreenState();
}

class _ArtistSelectScreenState extends State<ArtistSelectScreen> {
  List<int> selected = [];
  List<Map<String, dynamic>> categories = [
    {
      "title": "Martina",
      "image": "assets/images/onboard-2.png",
    },
    {
      "title": "Jason Derulo",
      "image":
          "https://img.freepik.com/free-photo/black-boy-posing-with-vinyls_23-2148171779.jpg?w=1380&t=st=1683448590~exp=1683449190~hmac=7b70eabb8d8e40ffe65c6004161b87de1ddcab4279e51a83dc757281b16a90c6",
    },
    {
      "title": "Julia Styles",
      "image":
          "https://img.freepik.com/free-photo/caucasian-woman-s-portrait-isolated-gradient-studio_155003-6506.jpg?size=626&ext=jpg&uid=R101899459&ga=GA1.1.1584983562.1681831701&semt=ais",
    },
    {
      "title": "Travis",
      "image":
          "https://img.freepik.com/free-photo/caucasian-woman-s-portrait-gradient-studio-background-neon-light-beautiful-male-model-with-hipster-style-glasses-concept-human-emotions-facial-expression-sales-ad-showing-nice_155003-30705.jpg?size=626&ext=jpg&uid=R101899459&ga=GA1.2.1584983562.1681831701&semt=ais",
    },
    {
      "title": "Billie Ellish",
      "image":
          "https://img.freepik.com/free-photo/inspiration-asian-young-woman-s-portrait-gradient-neon-light-beautiful-female-model_155003-39168.jpg?size=626&ext=jpg&uid=R101899459&ga=GA1.2.1584983562.1681831701&semt=ais",
    },
    {
      "title": "Halsey",
      "image":
          "https://img.freepik.com/free-photo/latino-young-woman-s-portrait-dark-studio-background-neon-concept-human-emotions-facial-expression_155003-46497.jpg?size=626&ext=jpg&uid=R101899459&ga=GA1.2.1584983562.1681831701&semt=ais",
    },
    {
      "title": "Betty Daniels",
      "image":
          "https://img.freepik.com/free-photo/portrait-young-woman-pink-wall-with-headphones_155003-11757.jpg?size=626&ext=jpg&uid=R101899459&ga=GA1.2.1584983562.1681831701&semt=ais",
    },
    {
      "title": "Blair",
      "image":
          "https://img.freepik.com/free-photo/beautiful-woman-s-portrait-colorful-neon-light_155003-3392.jpg?size=626&ext=jpg&uid=R101899459&ga=GA1.1.1584983562.1681831701&semt=ais",
    },
    {
      "title": "Aalyah",
      "image":
          "https://img.freepik.com/free-photo/portrait-female-fashion-model-neon-light-dark-studio-background_155003-42539.jpg?size=626&ext=jpg&uid=R101899459&ga=GA1.2.1584983562.1681831701&semt=ais",
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
                "Artists",
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: isDarkMode(context) ? Colors.white : Colors.black,
                  fontSize: 28,
                  fontWeight: FontWeight.w600,
                ),
              ),
              const SizedBox(height: 10),
              Text(
                "Select three or more artist to follow",
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
                    // Change it later to go to the home screen
                    Navigator.pushReplacementNamed(
                        context, AccountCreatedScreen.routeName);
                  })
            ],
          ),
        ),
      ),
    );
  }
}
