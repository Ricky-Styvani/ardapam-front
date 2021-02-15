<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary"> Laporan</h6>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                              </form>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div>
                                        <label for="">Bulan/Tahun</label>
                                        <b-dropdown variant="transparent">
                                            <div slot="button-content"></div>
                                            <b-dropdown-item href="#">Januari/2021</b-dropdown-item>
                                            <b-dropdown-item href="#">Februari/2021</b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="float-right">
                                        <label for="">Alamat/Rt</label>
                                        <b-dropdown variant="transparent">
                                            <div slot="button-content"></div>
                                            <b-dropdown-item href="#">Dawuhan/03</b-dropdown-item>
                                            <b-dropdown-item href="#">Dawuhan/03</b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                                </div>
                            </div>
                            <table class="table my-2 text-center">
                                <thead class="thead-light" style="color: black;">
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Awal</th>
                                    <th scope="col">Akhir</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td><button class="btn btn-light rounded-pill">Masukan Awal</button></td>
                                    <td><button class="btn btn-light rounded-pill">Masukan Akhir</button></td>
                                    
                                    <td>
                                       <a href="" class="btn btn-success rounded-pill btn-sm"><i class="fas fa-info"></i> Klaim</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                   <td><button class="btn btn-light rounded-pill">Masukan Awal</button></td>
                                    <td><button class="btn btn-light rounded-pill">Masukan Akhir</button></td>
                                    
                                    <td>
                                       <a href="" class="btn btn-success rounded-pill btn-sm"><i class="fas fa-info"></i> Klaim</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td><button class="btn btn-light rounded-pill">Masukan Awal</button></td>
                                    <td><button class="btn btn-light rounded-pill">Masukan Akhir</button></td>
                                    
                                    <td>
                                       <a href="" class="btn btn-success rounded-pill btn-sm"><i class="fas fa-info"></i> Klaim</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div class="d-flex ">
                                  <div class="ml-auto mt-2">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                                          <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                        </ul>
                                      </nav>
                                  </div>
                              </div>
                        </div>
                    </div>
                </div>
</template>