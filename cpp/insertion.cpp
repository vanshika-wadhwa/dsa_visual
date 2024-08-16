//insertion.cpp
#include <iostream>
using namespace std;
class INSERTION{
    public:
    int insertionSort(int arr[],int size);
};
int INSERTION::insertionSort(int arr[],int size) {
        int comparisonCount=0;
        for(int i=1;i<size;i++){
            int temp=arr[i];
            int j=i-1;
            while(j>=0 && arr[j]>temp){
                arr[j+1]=arr[j];
                j--;
                comparisonCount++;
               
            }       
            //Increment comparison count for the failed comparison outside the loop
            if(j>=0){
            comparisonCount++; 
            }
            arr[j+1]=temp;           
        }
        return comparisonCount;
}