export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  subRoles: string[];
  bio: string;
  email: string;
  location: string;
  institution: string;
  major: string;
  profileImage: string;
  socialLinks: SocialLink[];
}

export const profileData: ProfileData = {
  name: "SATRIA NAINAWA",
  firstName: "SATRIA",
  lastName: "NAINAWA",
  role: "Multimedia Creative",
  subRoles: [
    "FILM",
    "FILM CAMERAMAN",
    "EDITOR",
  ],
  bio: "saya adalah seorang pelajar di SMK NEGERI 1 GUNUNGSINDUR dengan jurusan broadcasting perfilman/ multimedia.",
  email: "reza.ardian@email.com",
  location: "Depok, Indonesia",
  institution: "SMKN 1 GUNUNGSINDUR",
  major: "Broadcasting Perfilman/Teknik Multimedia",
  profileImage: "/images/profile/profile-photo.jpg",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://instagram.com/rezaardian",
      icon: "Instagram",
      color: "#E4405F"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/rezaardian",
      icon: "Linkedin",
      color: "#0A66C2"
    },
    {
      platform: "GitHub",
      url: "https://github.com/rezaardian",
      icon: "Github",
      color: "#FFFFFF"
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/@rezaardian",
      icon: "Youtube",
      color: "#FF0000"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/rezaardian",
      icon: "Twitter",
      color: "#1DA1F2"
    },
  ]
};
