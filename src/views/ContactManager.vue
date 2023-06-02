<template>
  <!-- <router-view/> -->
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex align-items-center mt-4">
        <p class="title mb-0">Contact Manager</p>
        <router-link to="/contacts/add" class="btn btn-green text-white ms-4"
          >+ New</router-link
        >
      </div>
      <div class="col-12 mt-4">
        <div class="row">
          <div class="col-md-4 col-6">
            <input type="text" class="form-control" placeholder="Search Name" />
          </div>
          <div class="col-md-4 col-6">
            <input type="submit" class="btn btn-outline-dark" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="errorMessage">
    {{ errorMessage }}
  </div>
  <div class="container mt-4" v-if="contacts.length > 0">
    <div class="row" v-for="contact of contacts" :key="contact">
      <div class="col-8 card">
        <p class="my-2">
          Name: <span class="fw-bold">{{ contact.name }}</span>
        </p>
        <p class="my-2">
          Surname: <span class="fw-bold"></span>{{ contact.surname }}
        </p>
        <p class="my-2">
          Phone: <span class="fw-bold"></span>{{ contact.mobile }}
        </p>
        <p class="my-2">
          Email: <span class="fw-bold"></span>{{ contact.email }}
        </p>
      </div>
      <div class="col-4">
        <router-link :to="`/contacts/edit/${contact.id}`" class="btn"
          >edit</router-link
        >
        <button class="btn" @click="deleteContact(contact.id)">delete</button>
      </div>
    </div>
  </div>
</template>
<script>
import { ContactService } from "../../services/ContactService";

export default {
  name: "Contact-Manager",
  data: () => ({
    loading: false,
    contacts: [],
    errorMessage: null,
  }),
  async created() {
    try {
      this.loading = true;
      let response = await ContactService.getAllContacts();
      this.contacts = response.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    async deleteContact(contactId) {
      try {
        this.loading = true;
        let resp = await ContactService.deleteContact(contactId);
        if (resp) {
          this.loading = true;
          let response = await ContactService.getAllContacts();
          this.contacts = response.data;
          this.loading = false;
        }
      } catch (error) {
        this.errorMessage = error;
        this.loading = false;
      }
    },
  },
};
</script>
<style></style>
