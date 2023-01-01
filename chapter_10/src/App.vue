<template>
    <div class="container">
        <form action="">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input type="text" id="email" class="form-control" v-model.lazy="userData.email">
                        <p>{{ userData.email }}</p>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>  
                        <input type="password" id="password" class="form-control" :value="userData.password" @input="userData.password = $event.target.value">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input type="number" id="age" class="form-control" v-model="userData.age">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendMail"> Send Infomail
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="registerGoogle">
                            <input type="checkbox" id="registerGoogle" value="Register Google" v-model="registerType"> Register Google
                        </label>
                        <label for="registerFacebook">
                            <input type="checkbox" id="registerFacebook" value="Register Facebook" v-model="registerType"> Register Facebook
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="html">
                        <input type="radio" id="html" value="HTML" v-model="userData.languages"> HTML
                    </label>
                    <label for="css">
                        <input type="radio" id="css" value="CSS" v-model="userData.languages"> CSS
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input type="radio" id="male" value="Male" v-model="userData.gender"> Male
                    </label>
                    <label for="female">
                        <input type="radio" id="female" value="Female" v-model="userData.gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select id="priority" class="form-control" v-model="selectedPriority">
                        <option v-for="item in priorities" v-bind:key="item">{{ item }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="switched">Switched</label>
                    <custom-control v-model="dataSwitch"></custom-control>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button class="btn btn-primary" @click.prevent="submited">Submit!</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmit">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space: pre-line">Message: {{ message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail" v-bind:key="item">{{ item }}</li>
                        </ul>
                        <p><strong>Register type?</strong></p>
                        <ul>
                            <li v-for="item in registerType" v-bind:key="item">{{ item }}</li>
                        </ul>
                        <p>Gender: {{ userData.gender }}</p>
                        <p>Languages: {{ userData.languages }}</p>
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomControl from "./components/CustomControl.vue";

    export default {
        data: function() {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 0,
                    gender: 'Male',
                    languages: 'HTML'
                },
                message: '',
                sendMail: [],
                registerType: [],
                priorities: ['High', 'Low'],
                selectedPriority: 'Low',
                dataSwitch: true,
                isSubmit: false
            }
        },
        methods: {
            submited() {
                this.isSubmit = true;
            }
        },
        components: {
            customControl: CustomControl
        }
    }
</script>

<style>

</style>
