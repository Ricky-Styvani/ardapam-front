<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Pengaduan Pelanggan</h6>
                            
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <b-button v-b-modal.modal-1 class="btn btn-danger">Lapor</b-button>

                            <b-modal id="modal-1" title="Lapor">
                              <div class="form-group">
                                <label for="">Topik</label>
                                <input type="text" class="form-control">
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlTextarea1">Deskripsi</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                              </div>
                            </b-modal>
                            <div class="table-responsive">
                                <table class="table my-2">
                                <thead class="thead-light" style="color: black;">
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Laporan</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Manajer</td>
                                    <td>
                                        <a href="" class="btn btn-success btn-sm"><i class="fas fa-info fa-xs"> </i> info</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Babu</td>
                                    <td>
                                        <a href="" class="btn btn-success btn-sm"><i class="fas fa-info fa-xs"></i> info</a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>Asisten Manajer</td>
                                    <td>
                                        <a href="" class="btn btn-success btn-sm"><i class="fas fa-info fa-xs"> </i> info</a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
    
</template>


