CREATE DATABASE TPC;
USE TPC;

CREATE TABLE Db_Room (
Name_Room VARCHAR(100),
Code_Room INTEGER PRIMARY KEY,
Amount_Players INTEGER,
Started_Game BOOLEAN);

CREATE TABLE Db_Basic (
Id_Basic INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
Nick_Heritage VARCHAR(50),
Question VARCHAR(200),
Right_Answer VARCHAR(100),
Wrong_Answer_One VARCHAR(100),
Wrong_Answer_Two VARCHAR(100),
Wrong_Answer_Three VARCHAR(100),
Tip_One VARCHAR(100),
Tip_Two VARCHAR(100),
Tip_Three VARCHAR(100),
Position INTEGER,
foto LONGBLOB,
Code_Room INTEGER,
FOREIGN KEY (Code_Room) REFERENCES Db_Room(Code_Room));

CREATE TABLE Db_Profile (
Time_Player INTEGER,
Nick_Player VARCHAR(12),
Dice_Player INTEGER,
Score_Player FLOAT,
Map_Space INTEGER,
Room INTEGER,
Code_Room INTEGER);