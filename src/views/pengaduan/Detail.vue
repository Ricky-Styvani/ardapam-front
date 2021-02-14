<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Detail Pengaduan</h6>

                            <div class="d-flex">
                                <div class="ml-auto mr-4">
                                    <a href=""><i class="fas fa-trash"></i></a>
                                </div>
                            </div>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <form class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label >Nama</label>
                                        <input type="text" class="form-control" >
                                      </div>
                                      <div class="form-group">
                                          <label >Judul</label>
                                          <input type="text" class="form-control" >
                                      </div>
                                      <div class="form-group">
                                          <label for="exampleFormControlTextarea1">Deskripsi</label>
                                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                      </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label >Alamat</label>
                                        <input type="text" class="form-control" >
                                    </div>
                                    <div class="form-group">
                                        <label for="">Gambar</label><br>
                                        <img src="../../assets/img/undraw_profile.svg" class="img-thumbnail" style=" width: 300px;height: 240px;object-fit: contain;">
                                    </div>
                                </div>
                                
                                <a href="" class="btn btn-secondary btn-md mt-2 ml-3">Back</a>
                                <button type="submit" class="btn btn-primary btn-md mt-2 mx-2 ml-2" >Konfirmasi</button>
                              </form>
                        </div>
                    </div>
                </div>
</template>