// قائمة المستخدمين
const profiles = [
{
name: "Sara",
age: 23,
bio: "I love travel and music.",
image: "https://randomuser.me/api/portraits/women/44.jpg"
},
{
name: "Lina",
age: 25,
bio: "Coffee lover ☕",
image: "https://randomuser.me/api/portraits/women/65.jpg"
},
{
name: "Adam",
age: 27,
bio: "Gym and fitness 💪",
image: "https://randomuser.me/api/portraits/men/32.jpg"
},
{
name: "Youssef",
age: 24,
bio: "Football and gaming ⚽",
image: "https://randomuser.me/api/portraits/men/12.jpg"
}
];

// عناصر الصفحة
const profileImage = document.getElementById("profile-image");
const profileName = document.getElementById("profile-name");
const profileBio = document.getElementById("profile-bio");

const likeBtn = document.getElementById("like-btn");
const passBtn = document.getElementById("pass-btn");

let currentIndex = 0;

// عرض المستخدم
function showProfile() {

if(currentIndex >= profiles.length){
profileName.innerText = "No more profiles";
profileBio.innerText = "Come back later";
profileImage.src = "";
return;
}

const profile = profiles[currentIndex];

profileImage.src = profile.image;
profileName.innerText = profile.name + ", " + profile.age;
profileBio.innerText = profile.bio;
}

// زر الإعجاب
likeBtn.addEventListener("click", () => {
currentIndex++;
showProfile();
});

// زر الرفض
passBtn.addEventListener("click", () => {
currentIndex++;
showProfile();
});

// تشغيل أول ملف شخصي
showProfile();
