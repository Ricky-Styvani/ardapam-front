<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Form Pelanggan</h6>
                            <button @click="showAlert" class="mr-4"><i class="fas fa-trash "></i></button>
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="row">
                            <form class="col-md-8">
                                <div class="form-group">
                                  <label >ID Pelanggan</label>
                                  <input type="text" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label >Nama</label>
                                    <input type="text" class="form-control" >
                                </div>
                                <div class="form-group ">
                                    <label>RT</label>
                                    <select class="form-control">
                                        <option>RT 03</option>
                                        <option>RT 04</option>
                                        <option>RT 05</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label >No Telp</label>
                                    <input type="number" class="form-control" >
                                </div>
                                <div class="d-flex">
                                    <div class="ml-auto">
                                    <a href="" class="btn btn-secondary btn-md mt-2">Back</a>
                                    <button type="submit" class="btn btn-primary btn-md mt-2 ml-2" >Create</button>
                                </div>
                                </div>
                              </form>
                            </div>
                        </div>
                    </div>
                </div>
</template>
<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
            this.$swal({

              title: 'Are you sure?',

              text: "You won't be able to revert this!",

              type: 'warning',

              showCancelButton: true,

              confirmButtonColor: '#3085d6',

              cancelButtonColor: '#d33',

              confirmButtonText: 'Yes, delete it!'

            }).then((result) => {

              if (result.value) {

                this.$swal(

                  'Deleted!',

                  'Your file has been deleted.',

                  'success'

                )

              }

            });
    },
  },
};
</script>