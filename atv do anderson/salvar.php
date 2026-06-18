<?php

include("connection.php");

$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$nomepai = $_POST['nomepai'];
$nomemae = $_POST['nomemae'];
$turma = $_POST['turma'];
$serie = $_POST['serie'];
$cpf = $_POST['cpf'];

$sql = "INSERT INTO alunos
(nome, sobrenome, nomepai, nomemae, turma, serie, cpf)
VALUES
('$nome', '$sobrenome', '$nomepai', '$nomemae', '$turma', '$serie', '$cpf')";

if(mysqli_query($connection, $sql)){
    echo "Aluno Cadastrado";
}else{
    echo "erro: ", mysqli_error($connection);
}

mysqli_close($connection);

?>