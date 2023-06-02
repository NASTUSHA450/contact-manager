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
          <input type="text" class="form-control" placeholder="Name">
          <input type="text" class="form-control mt-3" placeholder="Surname">
          <input type="text" class="form-control mt-3" placeholder="Phone">
          <input type="text" class="form-control mt-3" placeholder="Email">
          <input type="submit" class="btn btn-green text-white mt-3" value="Update">
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "Edit-Contact",
  }
  </script>
  <style>
  </style>