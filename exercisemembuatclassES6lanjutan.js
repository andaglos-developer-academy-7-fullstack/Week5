/*
Buatlah sebuah Class Student, yang memiliki atribut berikut:

Name,
Age,
Date of Birth,
Gender
Student ID (bisa berupa angka atau teks), dan
Hobbies (bisa menampung lebih dari 1 hobi).
Class tersebut juga bisa memanggil fungsi dengan proses sebagai berikut:

SetName: mengubah nama student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
SetAge: mengubah umur student dengan mengirimkan satu parameter ke dalam fungsi berupa angka
SetDateOfBirth: mengubah tanggal lahir student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
SetGender: mengubah gender student dengan mengirimkan satu parameter ke dalam fungsi berupa teks, dan hanya bisa menerima nilai Male atau Female
addHobby: menambah hobi dengan mengirimkan satu parameter ke dalam fungsi berupa teks
removeHobby: menghapus list hobi yang ada dengan mengirimkan satu parameter berupa teks, yang merupakan hobi apa yang akan dihapus
getData: menampilkan seluruh data atribut murid

*/


class Student {
    constructor(name, age, dateOfBirth, gender, studentID, hobbies) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.studentID = studentID;
        this.hobbies = [];
    }
    setName(newName) {
        this.name = newName;
    }
    setAge(newAge) {
        this.age = newAge;
    }
    setDateOfBirth(newDateOfBirth) {
        this.dateOfBirth = newDateOfBirth;
    }
    setGender(newGender) {
        this.gender = newGender;
    }
    setStudentID(newStudentID) {
        this.studentID = newStudentID;
    }
    setHobbies(newHobbies) {
        this.hobbies = newHobbies;
    }
    addHobby(newAddHobby) {
        this.hobbies.push(newAddHobby);
    }
    removeHobby(newRemoveHobby) {
        this.hobbies.pop(newRemoveHobby)
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    getGender() {
        return this.gender;
    }
    getStudentID() {
        return this.studentID;
    }
    getHobbies() {
        return this.hobbies;
    }
    getData() {
        let data = "Nama: " + this.name + ", age: " + this.age + ", date of birth: " + this.dateOfBirth + ", gender: " + this.gender + ", student ID: " + this.studentID + ", hobbies: " + this.hobbies;
        return data;

    }
}

let profil = new Student()

let name = "sigit";
let age = 20;
let dateOfBirth = "1-Januari-2000";
let gender = "male";
let stuudentID = "1234567890AAA";
let hobbies = ["mancing", "makan"];
// let addHobby = "lari";
// let removeHobby = "makan";

profil.setName(name);
profil.setAge(age);
profil.setDateOfBirth(dateOfBirth);
profil.setGender(gender);
profil.setStudentID(stuudentID);
profil.setHobbies(hobbies);
// profil.setAddHobby(addHobby);
// profil.setRemoveHobby(removeHobby);

console.log(profil.getData());