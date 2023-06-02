<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-4">
        <p class="title mb-0">Edit Contact</p>
      </div>
    </div>
  </div>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="updateSubmit()">
          <input
            v-model="contact.name"
            type="text"
            class="form-control"
            placeholder="Name"
          />
          <input
            v-model="contact.surname"
            type="text"
            class="form-control mt-3"
            placeholder="Surname"
          />
          <input
            v-model="contact.mobile"
            type="text"
            class="form-control mt-3"
            placeholder="Phone"
          />
          <input
            v-model="contact.email"
            type="text"
            class="form-control mt-3"
            placeholder="Email"
          />
          <input
            type="submit"
            class="btn btn-green text-white mt-3"
            value="Update"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ContactService } from "../../services/ContactService";

export default {
  name: "Edit-Contact",
  data: function () {
    return {
      contactId: this.$route.params.contactId,
      contact: {
        name: "",
        surname: "",
        email: "",
        mobile: "",
      },
      errorMessage: null,
    };
  },
  async created() {
    try {
      let resp = await ContactService.getAllContact(this.contactId);
      this.contact = resp.data;
    } catch (error) {
      this.errorMessage = error;
    }
  },
  methods:{
   async updateSubmit(){
      try{
        let resp = await ContactService.updateContact(this.contact, this.contactId);
        if(resp){
          return this.$router.push('/');
        }else{
          return this.$router.push(`/contacts/edit/${this.contactId}`)
        }
      }
      catch(error){
        console.log(error);
      }
    }
  }
};
</script>
<style></style>
