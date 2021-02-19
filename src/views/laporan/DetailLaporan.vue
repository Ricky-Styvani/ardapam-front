<template>
    <div class="container-fluid">
                    <div class="card shadow mb-4 my-2 mx-3">
                        <!-- Card Header - Dropdown -->
                        <div
                            class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Form Pelanggan</h6>
                            <a href="" class="mr-4"><i class="fas fa-trash "></i></a>
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="row">
                            <form class="col-md-8">
                                <div class="form-group">
                                  <label >Nama Pelanggan</label>
                                  <input type="text" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label >Topik Laporan</label>
                                    <input type="text" class="form-control" >
                                </div>
                                <div class="form-group">
                                    <label >Deskripsi</label>
                                    <textarea nrows="5" class="form-control"></textarea>
                                </div>
                                <div class="d-flex">
                                    <div class="ml-auto">
                                    <a href="" class="btn btn-secondary btn-md mt-2">Back</a>
                                    <button type="submit" class="btn btn-primary btn-md mt-2 ml-2 " >Create</button>
                                </div>
                                </div>
                              </form>
                            </div>
                        </div>
                    </div>
                </div>
</template>