<template>
    <header>
        <h1><router-link to="/"><img src="../assets/logo.png" alt="Logo em formato png"></router-link></h1>
        <nav>
            <ol>
                <li><router-link to="/organizacao">Organização</router-link></li>
                <li><router-link to="/programacao">Programação</router-link></li>
                <li><router-link to="/palestras">Palestras</router-link></li>
                <li><router-link to="/contato">Contato</router-link></li>
            </ol>
        </nav>
    </header>
</template>
<style scoped>
    ol{
        display:flex;
        list-style-type: none;
        justify-content: center;
    }
    a{
        color:black;
    }
</style>