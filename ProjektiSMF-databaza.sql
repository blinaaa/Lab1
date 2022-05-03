Create database ProjektiSMF
use ProjektiSMF
CREATE TABLE Personeli(
Personeli_ID int IDENTITY(1,1) PRIMARY KEY ,
Personeli_Emri varchar(500) not null,
Personeli_Mbiemri varchar(500) not null,
Personeli_DataeLindjes datetime not null,
Personeli_Roli varchar(500) not null check (Personeli_Roli='Menaxher' or Personeli_Roli='Punetore'),
Personeli_Username varchar(10) not null unique,
Personeli_Email  varchar(500),
Personeli_Foto varchar(500)
);

select * from Personeli

CREATE TABLE Menaxheri(
Menaxheri_ID int
Foreign key references Personeli(Personeli_ID),
DataFillimit date,
DataMbarimit date,
primary key(Menaxheri_ID)
);

select * from Menaxheri

CREATE TABLE Punonjesi(
Punonjesi_ID int
Foreign key references Personeli(Personeli_ID),
primary key(Punonjesi_ID),
Menaxheri_ID int references Menaxheri(Menaxheri_ID ) on update cascade,
DataFillimit date,
DataMbarimit date,

);

INSERT INTO Personeli VALUES
('Filan','Fisteku','2021-01-08','Menaxher','filan1','filan@gmail.com')

create table Barna(
Barna_ID int identity(1,1) not null,
Barna_Emri varchar(500) not null,
Barna_Barkodi int not null,
Barna_Pershkrimi varchar(500),
Barna_DataP date not null,
Barna_DataS date not null,
Barna_Sasia int not null
);

select * from Barna

INSERT INTO Barna VALUES
('Paracetamol','1000000','Temperature, Dhimbje koke, Dhimbje trupi','2022-02-02','2032-02-02','34')