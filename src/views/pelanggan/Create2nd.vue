<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">CreatePelanggan 2nd</h6>
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="row">
                            <form class="col-md-8">
                                <div class="form-group">
                                  <label >Judul</label>
                                  <input type="text" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label >Alamat</label>
                                    <input type="text" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Deskripsi</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <div class="form-group">
                                    <label >Gambar</label>
                                    <input type="file" class="form-control" >
                                    <div class="text-center mt-2">
                                    <img src="../../assets/img/undraw_profile.svg" class="img-thumbnail" 
                                    style=" width: 300px;height: 240px;object-fit: contain;">
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="ml-auto">
                                    <a href="" class="btn btn-secondary btn-md mt-2">Back</a>
                                    <button type="submit" class="btn btn-primary btn-md  mx-2 mt-2" >Create</button>
                                </div>
                                
                                </div>
                              </form>
                            </div>
                        </div>
                    </div>
                </div>
</template>