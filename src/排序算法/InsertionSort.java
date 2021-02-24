package 排序算法;

import java.util.Arrays;

public class InsertionSort extends AbstarctSort{
    public static void main(String[] args) {
        int[] nums = {5, 5, 1, 2, 7, -1, -3, -2};
        Arrays.stream(insertSort(nums)).forEach(System.out::println);
    }
    //插入排序
    public static int[] insertSort(int[] nums) {
        int length = nums.length;
        for (int i = 1; i < length; i++) {
            int temp = nums[i];
            int j = i;
            while (j > 0 && nums[j - 1] > temp) {
                nums[j] = nums[j - 1];
                j--;
            }
            nums[j] = temp;
        }
        return nums;
    }
}
