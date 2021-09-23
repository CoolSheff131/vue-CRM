<template>

    <div class="app-page">
      <div>
        <div class="page-title">
          <h3>История записей</h3>
        </div>

        <div class="history-chart">
          <canvas></canvas>
        </div>

        <Loader v-if="loading"/>

        <p class="center" v-else-if="!records.length">Записей пока нет <router-link to="/record">Добавьте первую</router-link></p>

        <section v-else>
          <HistoryTable :records="records"/>
          <Paginate
          v-model="page"
          :page-count="pageCount"
          :click-handler="pageChangeHandler"
          :container-class="'pagination'"
          :prev-text="'Назад'"
          :next-text="'Вперед'"
          :page-class="'waves-effect'"/>
        </section>
      </div>
    </div>

</template>

<script>
import paginationMixin from '@/mixins/pagination.mixin'
import HistoryTable from '@/components/HistoryTable'
export default {
  name: 'history',
  mixinns: [paginationMixin],
  data: ()=>({
    loading: true,
    records: [],
    
  }),
  async mounted(){
    this.records = await this.$store.dispatch('fetchRecords')
    
    const categories = await this.$store.dispatch('fetchCategories')
    this.setupPagination( this.records.map(record => {
      return{
        ...record,
        categoryName: categories.find(c => c.id === record.categoryId).title,
        typeClass: record.type === 'income' ? 'green' : 'red',
        typeText:  record.type === 'income' ? 'Доход' : 'Расход',
      }
    }))
    this.loading = false
  },
  components: {
    HistoryTable
  }
}
</script>
