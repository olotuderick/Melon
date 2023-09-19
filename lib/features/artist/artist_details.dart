import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:monosonic/components/arrow_back.dart';
import 'package:monosonic/features/home/home.dart';
import 'package:monosonic/utils.dart';

class ArtistDetailsScreen extends StatefulWidget {
  static const routeName = '/artist-details';
  const ArtistDetailsScreen({super.key});

  @override
  State<ArtistDetailsScreen> createState() => _ArtistDetailsScreenState();
}

class _ArtistDetailsScreenState extends State<ArtistDetailsScreen> {
  int _tabIndex = 0;

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return DefaultTabController(
      length: 3,
      child: Scaffold(
          body: SizedBox(
        height: size.height,
        child: Stack(
          children: [
            Positioned(
              top: 0,
              left: 0,
              right: 0,
              child: Container(
                height: 300,
                alignment: Alignment.topCenter,
                padding: const EdgeInsets.only(
                  top: 50,
                  left: 16,
                  right: 16,
                ),
                decoration: const BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage('assets/images/onboard-2.png'),
                    fit: BoxFit.cover,
                    alignment: Alignment.topCenter,
                    opacity: 0.5,
                  ),
                ),
                child: Row(
                  children: [
                    const ArrowBack(),
                    const Spacer(),
                    ActionButton(
                      icon: 'assets/icons/menu.svg',
                      onPressed: () {},
                    )
                  ],
                ),
              ),
            ),
            Positioned(
              top: 110,
              child: Container(
                alignment: Alignment.center,
                width: size.width,
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        // followers
                        Column(
                          children: [
                            const Text(
                              '1.2M',
                              style: TextStyle(
                                fontSize: 28,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                            Text(
                              'Followers',
                              style: TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.w500,
                                color: Colors.white.withOpacity(0.7),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(width: 20),
                        // profile image
                        Container(
                          height: 90,
                          width: 90,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(24),
                            image: const DecorationImage(
                              image: AssetImage('assets/images/onboard-2.png'),
                              fit: BoxFit.cover,
                              alignment: Alignment.topCenter,
                            ),
                          ),
                        ),
                        // following
                        const SizedBox(width: 20),
                        Column(
                          children: [
                            const Text(
                              '120K',
                              style: TextStyle(
                                fontSize: 28,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                            ),
                            Text(
                              'Following',
                              style: TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.w500,
                                color: Colors.white.withOpacity(0.7),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                    // name
                    Column(
                      children: [
                        const SizedBox(height: 10),
                        const Text(
                          'Ariana Grande',
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                        ),
                        const SizedBox(height: 10),
                        Text(
                          'Pop, R&B, Hip Hop',
                          style: TextStyle(
                            fontSize: 13,
                            fontWeight: FontWeight.w500,
                            color: Colors.white.withOpacity(0.7),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        // follow button
                        SizedBox(
                          width: size.width * 0.4,
                          height: 56,
                          child: ElevatedButton.icon(
                            onPressed: () {},
                            icon:
                                const Icon(Icons.check_circle_outline_outlined),
                            label: const Text(
                              'Follow',
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                            style: ElevatedButton.styleFrom(
                              // foregroundColor: Colors.black,
                              // backgroundColor: Colors.white,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(14),
                              ),
                            ),
                          ),
                        ),
                        SizedBox(
                          width: size.width * 0.4,
                          height: 56,
                          child: ElevatedButton.icon(
                            onPressed: () {},
                            icon: SvgPicture.asset(
                              'assets/icons/chat-reg.svg',
                              color: Colors.white,
                            ),
                            label: const Text(
                              'Message',
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                            style: ElevatedButton.styleFrom(
                              backgroundColor:
                                  const Color.fromARGB(255, 144, 142, 142),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(14),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 20),
                    // tabs
                    Container(
                      child: TabBar(
                        indicatorWeight: 3,
                        indicatorColor: Colors.white,
                        padding: const EdgeInsets.symmetric(horizontal: 16),
                        splashFactory: NoSplash.splashFactory,
                        onTap: (index) {
                          setState(() {
                            _tabIndex = index;
                          });
                        },
                        overlayColor:
                            MaterialStateProperty.all(Colors.transparent),
                        tabs: [
                          Padding(
                            padding: const EdgeInsets.only(bottom: 10.0),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                SvgPicture.asset(
                                  'assets/icons/music-cd.svg',
                                  // if tab is selected change color
                                  color: _tabIndex == 0
                                      ? Colors.white
                                      : Colors.white.withOpacity(0.5),
                                ),
                                const SizedBox(width: 10),
                                const Text('Music'),
                              ],
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(bottom: 10.0),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                SvgPicture.asset(
                                  'assets/icons/camera.svg',
                                  color: _tabIndex == 1
                                      ? Colors.white
                                      : Colors.white.withOpacity(0.5),
                                ),
                                const SizedBox(width: 10),
                                const Text('Videos'),
                              ],
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(bottom: 10.0),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                SvgPicture.asset(
                                  'assets/icons/user.svg',
                                  color: _tabIndex == 2
                                      ? Colors.white
                                      : Colors.white.withOpacity(0.5),
                                  width: 13,
                                ),
                                const SizedBox(width: 10),
                                const Text('About'),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 20),
                    // tab bar view
                    SingleChildScrollView(
                      child: SizedBox(
                        height: size.height * 0.8,
                        child: TabBarView(
                          children: [
                            Column(
                              children: [
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Padding(
                                      padding: const EdgeInsets.only(
                                        left: 16,
                                      ),
                                      child: Text(
                                        "ALBUMS",
                                        style: TextStyle(
                                            fontSize: 14,
                                            fontWeight: FontWeight.bold,
                                            color:
                                                Colors.white.withOpacity(0.7),
                                            letterSpacing: 1),
                                      ),
                                    ),
                                    SizedBox(
                                      height: size.height * 0.02,
                                    ),
                                    Container(
                                      height: size.height * 0.17,
                                      padding: const EdgeInsets.only(left: 16),
                                      child: ListView.separated(
                                        scrollDirection: Axis.horizontal,
                                        itemBuilder: ((context, index) {
                                          return CdSongDetails(
                                            size: size * 0.6,
                                            image:
                                                "assets/images/onboard-2.png",
                                            title: "Desert Rose",
                                            artist: "Lady Gaga",
                                            artistSize: 10,
                                            nameSize: 12,
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
                                // Tracks
                                Container(
                                  padding: const EdgeInsets.symmetric(
                                      horizontal: 16),
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        "TRACKS",
                                        style: TextStyle(
                                            fontSize: 14,
                                            fontWeight: FontWeight.bold,
                                            color: isDarkMode(context)
                                                ? Colors.white.withOpacity(0.7)
                                                : Colors.black.withOpacity(0.7),
                                            letterSpacing: 1),
                                      ),
                                      const SizedBox(
                                        height: 0,
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
                                                mainAxisAlignment:
                                                    MainAxisAlignment.start,
                                                children: [
                                                  Row(
                                                    children: [
                                                      Container(
                                                        height: 60,
                                                        width: 60,
                                                        decoration:
                                                            BoxDecoration(
                                                          borderRadius:
                                                              BorderRadius
                                                                  .circular(12),
                                                          image:
                                                              const DecorationImage(
                                                            image: AssetImage(
                                                              "assets/images/onboard-2.png",
                                                            ),
                                                            fit: BoxFit.cover,
                                                            alignment: Alignment
                                                                .topCenter,
                                                          ),
                                                        ),
                                                      ),
                                                      const SizedBox(
                                                        width: 13,
                                                      ),
                                                      Column(
                                                        crossAxisAlignment:
                                                            CrossAxisAlignment
                                                                .start,
                                                        children: [
                                                          SizedBox(
                                                            width: size.width *
                                                                0.5,
                                                            child: Text(
                                                              "Doga",
                                                              style: TextStyle(
                                                                fontSize: 17,
                                                                fontWeight:
                                                                    FontWeight
                                                                        .w700,
                                                                color: isDarkMode(
                                                                        context)
                                                                    ? Colors
                                                                        .white
                                                                    : Colors
                                                                        .black,
                                                                letterSpacing:
                                                                    1,
                                                              ),
                                                              maxLines: 1,
                                                              overflow:
                                                                  TextOverflow
                                                                      .ellipsis,
                                                            ),
                                                          ),
                                                          const SizedBox(
                                                            height: 8,
                                                          ),
                                                          SizedBox(
                                                            width: size.width *
                                                                0.5,
                                                            child: Text(
                                                              "Doga (Disco Lights)",
                                                              style: TextStyle(
                                                                fontSize: 13,
                                                                fontWeight:
                                                                    FontWeight
                                                                        .w600,
                                                                color: isDarkMode(
                                                                        context)
                                                                    ? const Color
                                                                            .fromARGB(
                                                                        255,
                                                                        130,
                                                                        135,
                                                                        150)
                                                                    : Colors
                                                                        .black,
                                                                letterSpacing:
                                                                    1,
                                                              ),
                                                              maxLines: 1,
                                                              overflow:
                                                                  TextOverflow
                                                                      .ellipsis,
                                                            ),
                                                          ),
                                                        ],
                                                      ),
                                                    ],
                                                  ),
                                                  const Spacer(),
                                                  SizedBox(
                                                    child: SvgPicture.asset(
                                                      "assets/icons/play.svg",
                                                      color: isDarkMode(context)
                                                          ? Colors.white
                                                          : Colors.black,
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

                            // video
                            const Center(
                                child: Text(
                              'Videos',
                              style: TextStyle(color: Colors.white),
                            )),
                            // about
                            const Center(
                                child: Text(
                              'About',
                              style: TextStyle(color: Colors.white),
                            )),
                          ],
                        ),
                      ),
                    )
                  ],
                ),
              ),
            )
          ],
        ),
      )),
    );
  }
}
