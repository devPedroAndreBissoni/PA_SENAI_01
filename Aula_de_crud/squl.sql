create database Sonic;
use Sonic;
create table tales(
id int not null primary key auto_increment, 
nome varchar(50) not null,
serie int not null,
turma char(1)
);
select * from tales;