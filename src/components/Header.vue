<template>
    <header>
        <h1><router-link to="/"><img src="../assets/logo.png" alt="Logo em formato png"></router-link></h1>
        <nav>
            <ol>
                <li><router-link to="/about">Organização</router-link></li>
                <li>Programação</li>
                <li>Palestras</li>
                <li>Contato</li>
            </ol>
        </nav>
    </header>
</template>
<style scoped>
    ol{
        display:flex;
        list-style-type: none;
    }
    a{
        color:black;
    }
</style>