import vue from 'vue'
import exam from '@/api/exam.js'

export default {
  data () {
    return {
      form: {
        'id': null, // 考题编号
        'title': '', // 考题标题
        'scope': '', // 考题范围
        'type': '', // 考题类型
        'content': '', // 考题内容
        'options': [], // 考题选项
        'standard_answer': '' // 标准答案
      },
      // 考题范围列表
      question_scope: ['java', 'python', 'javascript', 'linux', 'mysql',
        'mq', 'redis', 'mongo', 'elastic-search', '其他'
      ],
      // 考题类型列表
      question_type: {
        'single': '单选题',
        'multi': '多选题',
        'free': '主观题'
      }
    }
  },
  methods: {
    // 添加选项
    addOption () {
      vue.set(this.form.options, this.form.options.length, {
        'no': '',
        'value': ''
      })
    },
    // 删除选项
    deleteOption (no) {
      this.$confirm('确定要删除' + no + '这个选项吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        for (let index in this.form.options) {
          if (this.form.options[index]['no'] === no) {
            this.form.options.splice(index, 1)
            break
          }
        }
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
      })
    },
    // 保存
    async save () {
      let question = await exam.saveQuestion(this.form)
      this.form.id = question.id
    }
  }
}
