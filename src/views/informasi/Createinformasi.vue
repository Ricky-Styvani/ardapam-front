<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Form Informasi</h6>
                        </div>
                        <div class="card-body">
                            <div class="row">
                            <form class="col-md-8">
                                <div class="form-group">
                                  <label >Judul</label>
                                  <input type="text" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Deskripsi</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <div class="form-group ">
                                    <label>Image</label>
                                    <input type="file" class="form-control" accept="image/jpg, image/png, image/jpeg">
                                </div>
                                <div class="d-flex">
                                    <div class="ml-auto">
                                    <a href="" class="btn btn-secondary btn-md mt-2">Back</a>
                                    <button type="submit" class="btn btn-primary btn-md mt-2 ml-2 mr-2" >Create</button>
                                </div>
                                </div>
                              </form>
                            </div>
                        </div>
                    </div>
                </div>
</template>