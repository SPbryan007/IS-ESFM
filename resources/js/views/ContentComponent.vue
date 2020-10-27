<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <!-- /.container-fluid -->
      <div class="container-fluid">
        <el-table :border="true" :data="data" :default-sort="{prop: 'Nit', order: 'descending'}">
          <el-table-column prop="Nit" label="Nit" sortable :resizable="true"></el-table-column>
          <el-table-column prop="Nombre" label="Nombre" sortable :resizable="true"></el-table-column>
          <el-table-column prop="Direccion" label="Dirección" sortable :resizable="true"></el-table-column>
          <el-table-column prop="Telefono" label="Telefono" :resizable="true"></el-table-column>
          <el-table-column prop="Responsable" label="Responsable" sortable :resizable="true"></el-table-column>
          <el-table-column label="Accion" :resizable="true">
            <!-- <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="Type to search" />
            </template>-->
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
    {{ $router.options.routes[3]}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { key: "Nit", with: "20%", sortable: true },
        { key: "Nombre", with: "20%", sortable: true },
        { key: "Direccion", with: "20%", sortable: false },
        { key: "Telefono", with: "20%", sortable: false },
        { key: "Responsable", with: "20%", sortable: true },
        { key: "Accion", with: "20%", sortable: false }
      ],
      data: [
        {
          Nit: "100003256485",
          Nombre: "DISTRIBUIDORA DE GAS GLP VIRGE DE GUADALUPE",
          Direccion: "Av.JAIME MENDOZA ESQ. HUALLPARIMACHI",
          Telefono: "758589652",
          Responsable: "Rosita sanchez"
        },
        {
          Nit: "2003256485",
          Nombre: "Copacabana",
          Direccion: "Calle olal",
          Telefono: "758589652",
          Responsable: "Melchor fernandez"
        },
        {
          Nit: "300003256485",
          Nombre: "Santa cruz",
          Direccion: "Calle olal",
          Telefono: "758589652",
          Responsable: "Juan baptista"
        },
        {
          Nit: "400003256485",
          Nombre: "Juventus",
          Direccion: "Calle olaassssssssssssssssssssssssssssdasdasdasdsal",
          Telefono: "758589652",
          Responsable: "Sosa"
        }
      ],
      defaultSortDir: "desc",
      InitialSort: {
        sortBy: "Nombre",
        dir: "asc"
      },
      currentSortDir: "",
      currentSortBy: ""
    };
  }
};
</script>