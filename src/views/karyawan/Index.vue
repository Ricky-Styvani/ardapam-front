<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary"> Karyawan</h6>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                              </form>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <a href="createkaryawan.html" class="btn btn-primary"><i class="fas fa-plus fa-sm"> Karyawan</i></a>
                            <table class="table my-2">
                                <thead class="thead-light" style="color: black;">
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">nama</th>
                                    <th scope="col">No Telp</th>
                                    <th scope="col">Level</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>08785463543</td>
                                    <td>Manajer</td>
                                    <td>
                                        <a href="" class="btn btn-success btn-sm"><i class="fas fa-edit fa-xs"> </i> Edit</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>08785463543</td>
                                    <td>Babu</td>
                                    <td>
                                        <a href="" class="btn btn-success btn-sm"><i class="fas fa-edit fa-xs"></i> Edit</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>08785463543</td>
                                    <td>Asisten Manajer</td>
                                    <td>
                                        <a href="" class="btn btn-success btn-sm"><i class="fas fa-edit fa-xs"> </i> Edit</a>
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