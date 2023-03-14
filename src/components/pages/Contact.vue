<template lang="">
    <div>
        <main>  
            <section class="bg-info bg-gradient py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="text-center mb-5 text-white">Scrivici</h2>
                            <form @submit.prevent="sendContact">
                                <div class="row">
                                    <div class="col-12 col-md-6 mb-3">
                                        <label class="control-label" for="name">Nome</label>
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Inserisci il tuo nome" v-model="name">
                                        <div class="errors" v-if="errors != null">
                                            <div v-for="(value, index) in errors.name" :key="index" class="">{{ value }}</div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mb-3">
                                        <label class="control-label" for="surname">Cognome</label>
                                        <input type="text" class="form-control" name="surname" id="surname" placeholder="Inserisci il tuo cognome" v-model="surname">
                                        <div class="errors" v-if="errors != null">
                                            <div v-for="(value, index) in errors.surname" :key="index" class="">{{ value }}</div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mb-3">
                                        <label class="control-label" for="email">Email</label>
                                        <input type="mail" class="form-control" name="email" id="email" placeholder="Inserisci la tua email" v-model="email">
                                        <div class="errors" v-if="errors != null">
                                            <div v-for="(value, index) in errors.email" :key="index" class="">{{ value }}</div>
                                        </div>
                                    </div>
                                    <div class="col-12 my-2 text-center">
                                        <button type="submit" class="btn btn-success">Invia i dati</button>
                                    </div>
                                    <div v-if="errors != null" class="col-12">
                                        <div class="errors">
                                            <div v-for="(value, index) in errors" :key="index" class="">{{ value }}</div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            errors: [],
            baseUrl: 'http://127.0.0.1:8000',
            name: '',
            surname: '',
            email: ''


        }
    },
    methods: {
        sendContact() {
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
            }
            axios.post(`${this.baseUrl}/api/contacts/`, data).then(response => {
                this.errors = response.data.errors;
            });

        }
    },
}

</script>
<style lang="">
    
</style>