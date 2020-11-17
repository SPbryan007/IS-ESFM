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
          <div class="row">
              <div class="col-lg-3 col-6">
                  <!-- small box -->
                  <div class="small-box bg-info">
                      <div class="inner">
                          <h3>150</h3>

                          <p>Ingresos</p>
                      </div>
                      <div class="icon">
                          <i class="fas fa-bag"></i>
                      </div>
                      <a href="#" class="small-box-footer">Ver mas.. <i class="fas fa-arrow-circle-right"></i></a>
                  </div>
              </div>
              <!-- ./col -->
              <div class="col-lg-3 col-6">
                  <!-- small box -->
                  <div class="small-box bg-success">
                      <div class="inner">
                          <h3>53<sup style="font-size: 20px">%</sup></h3>

                          <p>Bounce Rate</p>
                      </div>
                      <div class="icon">
                          <i class="ion ion-stats-bars"></i>
                      </div>
                      <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                  </div>
              </div>
              <!-- ./col -->
              <div class="col-lg-3 col-6">
                  <!-- small box -->
                  <div class="small-box bg-warning">
                      <div class="inner">
                          <h3>44</h3>

                          <p>User Registrations</p>
                      </div>
                      <div class="icon">
                          <i class="ion ion-person-add"></i>
                      </div>
                      <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                  </div>
              </div>
              <!-- ./col -->
              <div class="col-lg-3 col-6">
                  <!-- small box -->
                  <div class="small-box bg-danger">
                      <div class="inner">
                          <h3>65</h3>

                          <p>Unique Visitors</p>
                      </div>
                      <div class="icon">
                          <i class="ion ion-pie-graph"></i>
                      </div>
                      <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                  </div>
              </div>
              <!-- ./col -->
          </div>
          <div class="row">
              <div class="col-md-6">
                  <div class="card">
                      <div class="card-header border-0">
                            Ingresos y salida  gestion 2020
                      </div>
                      <div class="card-body">
                          <apexcharts width="550" type="bar" :options="chartOptions" :series="series"></apexcharts>
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="card">
                      <div class="card-header border-0">
                          Ingresos y salida  gestion 2020
                      </div>
                      <div class="card-body">
                          <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
        apexcharts: VueApexCharts,
    },
  data() {
    return {
        chartOptions: {
            chart: {
                id: 'vuechart-example'
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,1999,2000]
            }
        },
        series: [{
            name: 'Ingresos',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
            {
                name: 'Salidas',
                data: [30, 40, 45, 50, 49, 60, 70, 100]
            }
        ]
    };
  }
};
</script>
