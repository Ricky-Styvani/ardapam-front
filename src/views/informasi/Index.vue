<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Informasi</h6>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                              </form>
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <a href="createinformasi.html" class="btn btn-primary"><i  class="fas fa-plus fa-xs" ></i> Informasi</a>
                            <table class="table my-2">
                                <thead class="thead-light" style="color: black;">
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Judul</th>
                                    <th scope="col">Deskripsi</th>
                                    <th scope="col">gambar</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>ini judulnya</td>
                                    <td>ini deskripsi</td>
                                    <td><img src="/" alt=""></td>
                                    <td>
                                        <a href="" class="btn btn-danger btn-sm mx-1"><i class="fas fa-trash"></i></a>
                                        <a href="" class="btn btn-warning btn-sm mx-1"><i class="fas fa-edit"></i></a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              
                              
                        </div>
                    </div>
                </div>
</template>