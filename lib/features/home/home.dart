import 'dart:io';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:monosonic/features/artist/artist_details.dart';
import 'package:monosonic/components/arrow_back.dart';
import 'package:monosonic/features/on_boarding/account_select.dart';
import 'package:monosonic/features/player/full_screen.dart';
import 'package:monosonic/utils.dart';

class HomeScreen extends StatefulWidget {
  static const String routeName = '/home';
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    return Scaffold(
        appBar: PreferredSize(
          preferredSize: const Size.fromHeight(60),
          child: AppBar(
            automaticallyImplyLeading: false,
            backgroundColor: Colors.transparent,
            elevation: 0,
            title: Text(
              "Best of the week",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: isDarkMode(context) ? Colors.white : Colors.black,
              ),
            ),
            actions: [
              ActionButton(
                icon: "assets/icons/menu.svg",
                onPressed: () {},
                width: 8,
              ),
              const SizedBox(
                width: 10,
              )
            ],
          ),
        ),
        body: SingleChildScrollView(
          child: SafeArea(
            child: Stack(
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    /*  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        SizedBox(
                          width: size.width * 0.3,
                          child: Text(
                            "Best of the week",
                            style: TextStyle(
                              fontSize: 28,
                              fontWeight: FontWeight.bold,
                              color:
                                  isDarkMode(context) ? Colors.white : Colors.black,
                            ),
                          ),
                        ),
                        ActionButton(
                          icon: "assets/icons/menu.svg",
                          onPressed: () {},
                          width: 8,
                        )
                      ],
                    ),
                  ), */
                    SizedBox(
                      height: size.height * 0.02,
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Padding(
                          padding: const EdgeInsets.only(
                            left: 16,
                          ),
                          child: Text(
                            "TOP PLAYLISTS",
                            style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.bold,
                                color: isDarkMode(context)
                                    ? Colors.white.withOpacity(0.7)
                                    : Colors.black.withOpacity(0.7),
                                letterSpacing: 1),
                          ),
                        ),
                        SizedBox(
                          height: size.height * 0.02,
                        ),
                        SizedBox(
                          height: size.height * 0.3,
                          child: ListView.separated(
                            scrollDirection: Axis.horizontal,
                            itemBuilder: ((context, index) {
                              return CdSongDetails(
                                size: size,
                                image: "assets/images/onboard-2.png",
                                title: "Girls just wanna have fun",
                                artist: "Doga (Disco Lights)",
                              );
                            }),
                            separatorBuilder: ((context, index) =>
                                const SizedBox(
                                  width: 15,
                                )),
                            itemCount: 10,
                          ),
                        )
                      ],
                    ),
                    // Artists
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            "TOP ARTIST",
                            style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.bold,
                                color: isDarkMode(context)
                                    ? Colors.white.withOpacity(0.7)
                                    : Colors.black.withOpacity(0.7),
                                letterSpacing: 1),
                          ),
                          const SizedBox(
                            height: 16,
                          ),
                          SizedBox(
                            height: size.height * 0.4,
                            child: ListView.separated(
                              scrollDirection: Axis.vertical,
                              itemBuilder: ((context, index) {
                                return Container(
                                  padding: const EdgeInsets.only(
                                      right: 5, bottom: 15),
                                  // border bottom
                                  decoration: BoxDecoration(
                                    border: Border(
                                      bottom: BorderSide(
                                        color: isDarkMode(context)
                                            ? const Color.fromARGB(
                                                255, 46, 48, 57)
                                            : Colors.white,
                                        width: 1,
                                      ),
                                    ),
                                  ),
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    children: [
                                      Row(
                                        children: [
                                          Container(
                                            height: 60,
                                            width: 60,
                                            decoration: BoxDecoration(
                                              borderRadius:
                                                  BorderRadius.circular(12),
                                              image: const DecorationImage(
                                                image: AssetImage(
                                                    "assets/images/onboard-2.png"),
                                                fit: BoxFit.cover,
                                                alignment: Alignment.topCenter,
                                              ),
                                            ),
                                          ),
                                          const SizedBox(
                                            width: 13,
                                          ),
                                          Column(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(
                                                width: size.width * 0.5,
                                                child: Text(
                                                  "Doga",
                                                  style: TextStyle(
                                                    fontSize: 17,
                                                    fontWeight: FontWeight.w700,
                                                    color: isDarkMode(context)
                                                        ? Colors.white
                                                        : Colors.black,
                                                    letterSpacing: 1,
                                                  ),
                                                  maxLines: 1,
                                                  overflow:
                                                      TextOverflow.ellipsis,
                                                ),
                                              ),
                                              const SizedBox(
                                                height: 8,
                                              ),
                                              GestureDetector(
                                                onTap: () {
                                                  Navigator.pushNamed(
                                                      context,
                                                      ArtistDetailsScreen
                                                          .routeName);
                                                },
                                                child: SizedBox(
                                                  width: size.width * 0.5,
                                                  child: Text(
                                                    "Doga (Disco Lights)",
                                                    style: TextStyle(
                                                      fontSize: 13,
                                                      fontWeight:
                                                          FontWeight.w600,
                                                      color: isDarkMode(context)
                                                          ? const Color
                                                                  .fromARGB(255,
                                                              130, 135, 150)
                                                          : Colors.black,
                                                      letterSpacing: 1,
                                                    ),
                                                    maxLines: 1,
                                                    overflow:
                                                        TextOverflow.ellipsis,
                                                  ),
                                                ),
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                      const Spacer(),
                                      GestureDetector(
                                        onTap: () {
                                          Navigator.pushNamed(context,
                                              FullScreenPlayer.routeName);
                                        },
                                        child: SizedBox(
                                          child: SvgPicture.asset(
                                            "assets/icons/play.svg",
                                            color: isDarkMode(context)
                                                ? Colors.white
                                                : Colors.black,
                                          ),
                                        ),
                                      )
                                    ],
                                  ),
                                );
                              }),
                              separatorBuilder: ((context, index) =>
                                  const SizedBox(
                                    height: 10,
                                  )),
                              itemCount: 10,
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
                // Player
                Positioned(
                  bottom: MediaQuery.of(context).padding.bottom,
                  left: 16,
                  right: 16,
                  child: GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, FullScreenPlayer.routeName);
                    },
                    child: Container(
                      width: size.width * 0.9,
                      height: 64,
                      clipBehavior: Clip.antiAlias,
                      decoration: BoxDecoration(
                        color: isDarkMode(context)
                            ? Colors.white.withOpacity(0.2)
                            : const Color.fromARGB(255, 33, 33, 41),
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: BackdropFilter(
                        filter: isDarkMode(context)
                            ? ImageFilter.blur(sigmaX: 15.5, sigmaY: 15.5)
                            : ImageFilter.blur(sigmaX: 0, sigmaY: 0),
                        child: Container(
                          width: size.width * 0.8,
                          height: 60,
                          padding: const EdgeInsets.only(bottom: 26),
                          child: ListTile(
                            minLeadingWidth: 0,
                            leading: Container(
                              width: 35,
                              height: 35,
                              decoration: const BoxDecoration(
                                shape: BoxShape.circle,
                                image: DecorationImage(
                                  image:
                                      AssetImage("assets/images/onboard-2.png"),
                                  fit: BoxFit.cover,
                                  alignment: Alignment.topCenter,
                                ),
                              ),
                            ),
                            title: const Text(
                              "Hail of the victor",
                              style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                                color: Colors.white,
                                letterSpacing: 1,
                              ),
                            ),
                            subtitle: const Text(
                              "Doga",
                              style: TextStyle(
                                fontSize: 12,
                                fontWeight: FontWeight.w600,
                                color: Colors.white,
                                letterSpacing: 1,
                              ),
                            ),
                            trailing: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                GestureDetector(
                                  onTap: () {},
                                  child: const Icon(
                                    Icons.skip_previous_outlined,
                                    color: Colors.white,
                                    size: 28,
                                  ),
                                ),
                                const SizedBox(
                                  width: 8,
                                ),
                                GestureDetector(
                                  onTap: () {},
                                  child: const Icon(
                                    Icons.play_arrow,
                                    color: Colors.white,
                                    size: 32,
                                  ),
                                ),
                                const SizedBox(
                                  width: 8,
                                ),
                                GestureDetector(
                                  onTap: () {},
                                  child: const Icon(
                                    Icons.skip_next_outlined,
                                    color: Colors.white,
                                    size: 28,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
        bottomNavigationBar: Platform.isIOS
            ? Transform.translate(
                offset: Offset(0, -size.height * 0.03),
                child: UnconstrainedBox(
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(30),
                    child: Container(
                      height: size.height * 0.07,
                      width: size.width * 0.85,
                      decoration: BoxDecoration(
                        color: isDarkMode(context)
                            ? Colors.white.withOpacity(0.14)
                            : const Color.fromARGB(255, 33, 33, 41),
                      ),
                      child: BackdropFilter(
                        filter: isDarkMode(context)
                            ? ImageFilter.blur(sigmaX: 15.5, sigmaY: 15.5)
                            : ImageFilter.blur(sigmaX: 0, sigmaY: 0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceAround,
                          children: [
                            SvgPicture.asset(
                              'assets/icons/home-reg.svg',
                              color: Colors.white,
                              width: 23,
                            ),
                            SvgPicture.asset(
                              'assets/icons/search-reg.svg',
                              color: Colors.white,
                              width: 23,
                            ),
                            SvgPicture.asset(
                              'assets/icons/widget-reg.svg',
                              color: Colors.white,
                              width: 23,
                            ),
                            SvgPicture.asset(
                              'assets/icons/chat-reg.svg',
                              color: Colors.white,
                              width: 23,
                            ),
                            Container(
                              height: 25,
                              width: 25,
                              padding: const EdgeInsets.all(5),
                              decoration: BoxDecoration(
                                color: Colors.white,
                                borderRadius: BorderRadius.circular(40),
                              ),
                              child: SvgPicture.asset(
                                'assets/icons/user.svg',
                                color: Colors.black,
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              )
            : SizedBox(
                // color: Colors.red,
                height: size.height * 0.09,
                child: BottomNavigationBar(
                  // blur the background
                  backgroundColor: isDarkMode(context)
                      ? Colors.white.withOpacity(0.14)
                      : const Color.fromARGB(255, 33, 33, 41),
                  showSelectedLabels: false,
                  showUnselectedLabels: false,
                  items: [
                    BottomNavigationBarItem(
                      icon: SvgPicture.asset(
                        'assets/icons/home-reg.svg',
                        color:
                            isDarkMode(context) ? Colors.white : Colors.black,
                        width: 23,
                      ),
                      label: 'home',
                    ),
                    BottomNavigationBarItem(
                      icon: SvgPicture.asset(
                        'assets/icons/search-reg.svg',
                        color:
                            isDarkMode(context) ? Colors.white : Colors.black,
                        width: 23,
                      ),
                      label: '',
                    ),
                    BottomNavigationBarItem(
                      icon: SvgPicture.asset(
                        'assets/icons/widget-reg.svg',
                        color:
                            isDarkMode(context) ? Colors.white : Colors.black,
                        width: 23,
                      ),
                      label: '',
                    ),
                    BottomNavigationBarItem(
                      icon: SvgPicture.asset(
                        'assets/icons/chat-reg.svg',
                        color:
                            isDarkMode(context) ? Colors.white : Colors.black,
                        width: 23,
                      ),
                      label: '',
                    ),
                    BottomNavigationBarItem(
                      icon: Container(
                        height: 30,
                        width: 30,
                        padding: const EdgeInsets.all(5),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(40),
                        ),
                        child: SvgPicture.asset(
                          'assets/icons/user.svg',
                          color: Colors.black,
                        ),
                      ),
                      label: '',
                    ),
                  ],
                ),
              ));
  }
}

class CdSongDetails extends StatelessWidget {
  const CdSongDetails({
    Key? key,
    required this.size,
    required this.image,
    required this.title,
    required this.artist,
    this.nameSize,
    this.artistSize,
  }) : super(key: key);

  final Size size;
  final String image;
  final String title;
  final String artist;
  final double? nameSize;
  final double? artistSize;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        CdComponent(
          color: isDarkMode(context)
              ? const Color.fromARGB(255, 33, 33, 41)
              : Colors.white,
          size: Size(
            size.width - 90,
            size.height - 90,
          ),
          image: image,
        ),
        SizedBox(
          height: size.height * 0.01,
        ),
        SizedBox(
          width: size.width * 0.35,
          child: Text(
            title,
            style: TextStyle(
              fontSize: nameSize ?? 15,
              fontWeight: FontWeight.bold,
              color: isDarkMode(context) ? Colors.white : Colors.black,
              letterSpacing: 1,
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            textAlign: TextAlign.center,
          ),
        ),
        const SizedBox(
          height: 2,
        ),
        SizedBox(
          width: size.width * 0.3,
          child: Text(
            artist,
            style: TextStyle(
              fontSize: artistSize ?? 10,
              fontWeight: FontWeight.bold,
              color: isDarkMode(context)
                  ? const Color.fromARGB(255, 130, 135, 150)
                  : Colors.black,
              letterSpacing: 1,
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            textAlign: TextAlign.center,
          ),
        ),
      ],
    );
  }
}
